export async function verifyTurnstileToken(token: string, secret: string): Promise<boolean> {
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const json = (await r.json()) as { success?: boolean };
    return Boolean(json.success);
  } catch {
    return false;
  }
}
