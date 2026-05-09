/**
 * Ortak site ayarları. Panel adresi: projede `.env.local` içinde
 * NEXT_PUBLIC_PANEL_URL=http://localhost:5173  (ör. SolarMind user-panel)
 */

export type PanelLinkConfig = {
  href: string;
  openInNewTab: boolean;
  /** Env ile gerçek panel URL/path verildi mi (mailto geri dönüşü değil) */
  isConfigured: boolean;
};

const PANEL_MAILTO =
  "mailto:iletisim@oncuintelligence.com?subject=Kurumsal%20panel%20eri%C5%9Fimi";

function rawPanelUrl(): string {
  return typeof process.env.NEXT_PUBLIC_PANEL_URL === "string"
    ? process.env.NEXT_PUBLIC_PANEL_URL.trim()
    : "";
}

/**
 * Navbar, footer ve kahraman CTA için tek kaynak.
 * URL yoksa: iletişim maili (panel erişimi konusuyla) — yine de “panel” sekmesi çalışır.
 */
export function getPanelLink(): PanelLinkConfig {
  const raw = rawPanelUrl();

  if (!raw) {
    return {
      href: PANEL_MAILTO,
      openInNewTab: false,
      isConfigured: false,
    };
  }

  if (/^https?:\/\//i.test(raw)) {
    return { href: raw, openInNewTab: true, isConfigured: true };
  }

  const path = raw.startsWith("/") ? raw : `/${raw.replace(/^\/+/, "")}`;
  return { href: path, openInNewTab: false, isConfigured: true };
}

export function panelButtonLabel(isConfigured: boolean): string {
  return isConfigured ? "Kurumsal panele giriş" : "Panel erişimi talep et";
}

/** Örn. https://status.vercel.com — boşsa footer’da gizlenir */
export function getStatusPageUrl(): string {
  const raw = typeof process.env.NEXT_PUBLIC_STATUS_URL === "string" ? process.env.NEXT_PUBLIC_STATUS_URL.trim() : "";
  return raw;
}

/** Toplantı linki (Cal.com, Calendly vb.) — boşsa CTA’da gizlenir */
export function getMeetingUrl(): string {
  const raw =
    typeof process.env.NEXT_PUBLIC_MEETING_URL === "string" ? process.env.NEXT_PUBLIC_MEETING_URL.trim() : "";
  return raw;
}

/** Cloudflare Turnstile (boşsa widget yok) */
export function getTurnstileSiteKey(): string {
  return typeof process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY === "string"
    ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY.trim()
    : "";
}
