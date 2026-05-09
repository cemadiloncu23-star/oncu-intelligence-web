import Image from "next/image";
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
    <footer className="relative z-10 border-t border-[#E2E8F0] bg-[#F8FAFC] pb-0 dark:border-border dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden ring-1 ring-[#001144]/12 bg-[#001144]/[0.04] w-fit mb-4 mx-auto md:mx-0">
              <Image
                src="/oncu-intelligence-logo.png"
                alt="ÖNCÜ Intelligence"
                width={280}
                height={280}
                className="h-12 w-auto max-w-[200px] object-contain object-left"
              />
            </div>
            <p className="text-[11px] font-bold text-[#15803D] tracking-[0.18em] uppercase mb-2">Satenergy ürün hattı</p>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-md mx-auto md:mx-0 dark:text-muted-foreground">
              Uydu istihbaratı ve enerji verimliliği platformunun tanıtım sitesi. Kurumsal panel ile uyumlu içerik ve
              güven unsurları bu vitrinde toplanmıştır.
            </p>
            <NewsletterForm />
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A] mb-3">Site</h3>
            <div className="flex flex-col gap-2 text-[#64748B] text-sm">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[#15803D] transition-colors">
                  {item.label}
                </Link>
              ))}
              <PanelNavLink className="inline-flex items-center gap-2 font-semibold text-[#4338CA] hover:text-[#3730a3] transition-colors w-fit mx-auto md:mx-0" />
              {statusUrl ? (
                <a
                  href={statusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#15803D] transition-colors"
                >
                  Sistem durumu
                </a>
              ) : null}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A] mb-3">Yasal</h3>
            <div className="flex flex-col gap-2 text-[#64748B] text-sm">
              <Link href="/kvkk" className="hover:text-[#15803D] transition-colors">
                KVKK aydınlatma
              </Link>
              <Link href="/gizlilik" className="hover:text-[#15803D] transition-colors">
                Gizlilik politikası
              </Link>
              <Link href="/kullanim-sartlari" className="hover:text-[#15803D] transition-colors">
                Kullanım şartları
              </Link>
            </div>
            <h3 className="font-bold text-[#0F172A] mb-3 mt-8">İletişim</h3>
            <p className="text-[#64748B] text-sm mb-2">Demo veya erişim:</p>
            <a
              href="mailto:iletisim@oncuintelligence.com"
              className="text-[#15803D] hover:text-[#166534] text-sm font-semibold"
            >
              iletisim@oncuintelligence.com
            </a>
          </div>
        </div>
        <div className="space-y-2 border-t border-[#E2E8F0] pt-6 text-center dark:border-border">
          <p className="mx-auto max-w-2xl text-[11px] text-[#64748B] dark:text-muted-foreground">
            Ticari iletişim talepleri form veya e-posta ile alınır; yanıt süresi mesaj sırasına göredir.
          </p>
          <p className="text-[#94A3B8] mx-auto max-w-xl text-xs dark:text-muted-foreground">
            Verileriniz yalnızca analiz ve raporlama amacıyla işlenir; üçüncü taraflarla paylaşılmaz.
          </p>
          <p className="pt-2 text-sm text-[#94A3B8]">&copy; 2026 ÖNCÜ Intelligence. Tüm hakları saklıdır.</p>
        </div>
      </div>

      <div className="border-t border-[#1e293b] bg-[#0f172a]" role="contentinfo" aria-label="ÖNCÜ Intelligence credits">
        <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3">
          <p className="text-center text-[11px] font-medium tracking-wide text-slate-500">
            Credit by the <span className="font-semibold text-slate-300">Öncü Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
