/**
 * Ortak site ayarları. Panel adresi varsayılan olarak
 * https://panel.oncuintelligence.com'dur. Override için `.env.local` içinde
 * NEXT_PUBLIC_PANEL_URL tanımlayın (ör. geliştirme: http://localhost:5173).
 */

export type PanelLinkConfig = {
  href: string;
  openInNewTab: boolean;
  /** Env ile gerçek panel URL/path verildi mi (mailto geri dönüşü değil) */
  isConfigured: boolean;
};

/** Env tanımlı değilse kullanılacak production panel adresi. */
const DEFAULT_PANEL_URL = "https://panel.oncuintelligence.com";

function rawPanelUrl(): string {
  const fromEnv =
    typeof process.env.NEXT_PUBLIC_PANEL_URL === "string"
      ? process.env.NEXT_PUBLIC_PANEL_URL.trim()
      : "";
  return fromEnv || DEFAULT_PANEL_URL;
}

/**
 * Navbar, footer ve kahraman CTA için tek kaynak.
 * Env ile özel bir adres verilmediyse production paneline (panel.oncuintelligence.com) yönlenir.
 */
export function getPanelLink(): PanelLinkConfig {
  const raw = rawPanelUrl();

  if (!raw) {
    return {
      href: DEFAULT_PANEL_URL,
      openInNewTab: true,
      isConfigured: true,
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
