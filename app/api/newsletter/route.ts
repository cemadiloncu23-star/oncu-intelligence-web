import { NextResponse } from "next/server";
import { z } from "zod";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  email: z.string().email("Geçerli e-posta girin"),
  /** Honeypot — boş kalmalı */
  full_name: z.string().max(200).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`newsletter:${ip}`, 8, 900_000);
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
    const msg = parsed.error.flatten().fieldErrors.email?.[0] ?? "Doğrulama hatası";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }

  if (parsed.data.full_name?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    email: parsed.data.email,
    source: "satenergy-web-newsletter",
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        return NextResponse.json({ ok: false, error: "Kayıt iletilemedi." }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ ok: false, error: "Bağlantı hatası." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, delivered: Boolean(webhook) });
}
