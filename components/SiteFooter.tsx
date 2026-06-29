import Link from "next/link";
import PanelNavLink from "@/components/PanelNavLink";
import NewsletterForm from "@/components/NewsletterForm";
import { getStatusPageUrl } from "@/lib/site-config";

const footerNav = [
  { label: "Platform", href: "/#platform" },
  { label: "Süreçler", href: "/#surecler" },
  { label: "SSS", href: "/#sss" },
  { label: "Paketler", href: "/paketler" },
  { label: "Teknik güven", href: "/guven" },
  { label: "Blog", href: "/blog" },
  { label: "Vaka çalışmaları", href: "/vaka" },
  { label: "Kaynaklar", href: "/kaynaklar" },
  { label: "İletişim formu", href: "/iletisim" },
];

export default function SiteFooter() {
  const statusUrl = getStatusPageUrl();

  return (
    <footer className="relative z-10 border-t border-zinc-800 bg-[#070a13] pb-0">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-flex w-fit mx-auto md:mx-0" aria-label="ÖNCÜ Intelligence — ana sayfa">
              <span className="font-[family-name:var(--font-inter)] text-[15px] font-extrabold uppercase tracking-[0.2em] text-white">
                ÖNCÜ<span className="ml-1.5 font-light text-zinc-400">INTELLIGENCE</span>
              </span>
            </Link>
            <p className="text-[11px] font-semibold text-zinc-500 tracking-[0.18em] uppercase mb-2">KutGöz ürün hattı</p>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Uydu istihbaratı ve enerji verimliliği platformunun tanıtım sitesi. Kurumsal panel ile uyumlu içerik ve
              güven unsurları bu vitrinde toplanmıştır.
            </p>
            <NewsletterForm />
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-zinc-200 mb-3 text-sm">Site</h3>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
              <PanelNavLink className="inline-flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition-colors w-fit mx-auto md:mx-0" />
              {statusUrl ? (
                <a
                  href={statusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Sistem durumu
                </a>
              ) : null}
            </div>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide text-zinc-200 mb-3 text-sm">Yasal</h3>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              <Link href="/kvkk" className="hover:text-white transition-colors">
                KVKK aydınlatma
              </Link>
              <Link href="/gizlilik" className="hover:text-white transition-colors">
                Gizlilik politikası
              </Link>
              <Link href="/kullanim-sartlari" className="hover:text-white transition-colors">
                Kullanım şartları
              </Link>
            </div>
            <h3 className="font-semibold uppercase tracking-wide text-zinc-200 mb-3 mt-8 text-sm">İletişim</h3>
            <p className="text-zinc-400 text-sm mb-2">Demo veya erişim:</p>
            <a
              href="mailto:iletisim@oncuintelligence.com"
              className="font-mono text-zinc-300 hover:text-white text-sm"
            >
              iletisim@oncuintelligence.com
            </a>
          </div>
        </div>
        <div className="space-y-2 border-t border-zinc-800 pt-6 text-center">
          <p className="mx-auto max-w-2xl text-[11px] text-zinc-500">
            Ticari iletişim talepleri form veya e-posta ile alınır; yanıt süresi mesaj sırasına göredir.
          </p>
          <p className="text-zinc-600 mx-auto max-w-xl text-xs">
            Verileriniz yalnızca analiz ve raporlama amacıyla işlenir; üçüncü taraflarla paylaşılmaz.
          </p>
          <p className="pt-2 text-sm text-zinc-600">&copy; 2026 ÖNCÜ Intelligence. Tüm hakları saklıdır.</p>
        </div>
      </div>

      <div className="border-t border-zinc-800/70 bg-black/40" role="contentinfo" aria-label="ÖNCÜ Intelligence credits">
        <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3">
          <p className="text-center text-[11px] font-medium tracking-wide text-zinc-600">
            Credit by the <span className="font-semibold text-zinc-400">Öncü Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
