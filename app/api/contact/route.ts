import { NextResponse } from "next/server";
import { z } from "zod";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/verify-turnstile";

const schema = z.object({
  name: z.string().min(2, "Ad soyad çok kısa").max(120),
  email: z.string().email("Geçerli e-posta girin"),
  company: z.string().max(200).optional().or(z.literal("")),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı").max(5000),
  company_website: z.string().max(400).optional().or(z.literal("")),
  turnstileToken: z.string().optional().or(z.literal("")),
});

async function postToWebhooks(webhooks: string[], payload: object) {
  for (const url of webhooks) {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error("webhook failed");
  }
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`contact:${ip}`, 15, 900_000);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: `Çok fazla istek. ${limited.retryAfterSec} sn sonra yeniden deneyin.` },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek gövdesi" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg = Object.values(first).flat()[0] ?? "Doğrulama hatası";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }

  if (parsed.data.company_website?.trim()) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (secret) {
    const token = parsed.data.turnstileToken?.trim();
    if (!token) {
      return NextResponse.json({ ok: false, error: "Güvenlik doğrulaması gerekli (Turnstile)." }, { status: 400 });
    }
    const ok = await verifyTurnstileToken(token, secret);
    if (!ok) {
      return NextResponse.json({ ok: false, error: "Güvenlik doğrulaması başarısız." }, { status: 400 });
    }
  }

  const { turnstileToken: _t, company_website: _hp, ...rest } = parsed.data;
  void _t;
  void _hp;

  const payload = {
    ...rest,
    source: "kutgoz-web-contact",
    submittedAt: new Date().toISOString(),
    clientIp: ip,
  };

  const webhooks = [process.env.CONTACT_FORM_WEBHOOK_URL, process.env.CONTACT_FORM_WEBHOOK_URL_2]
    .map((u) => (typeof u === "string" ? u.trim() : ""))
    .filter(Boolean);

  if (webhooks.length) {
    try {
      await postToWebhooks(webhooks, payload);
    } catch {
      return NextResponse.json(
        { ok: false, error: "Webhook iletilemedi; daha sonra deneyin." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true, delivered: webhooks.length > 0 });
}
