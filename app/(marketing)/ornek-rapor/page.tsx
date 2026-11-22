import type { Metadata } from "next";
import Link from "next/link";
import InnerPageHeader from "@/components/InnerPageHeader";
import { KarneOnizleme } from "@/components/kurumsal/KurumsalLanding";

export const metadata: Metadata = {
  title: "Örnek rapor — GES fizibilite karnesi",
  description:
    "KutGöz GES ön fizibilite karnesi: güneş kaynağı, eğim, arazi örtüsü ve alan puanları; kapasite, yıllık üretim, LCOE, kırmızı bayraklar ve yapılacaklar.",
};

const BOLUMLER = [
  {
    t: "1. Not ve hüküm",
    d: "A (yatırıma uygun), B (uygun — iyileştirme alanları var), C (detaylı etüt gerekli), D (önerilmez). Toplam puan, faktör puanlarının ağırlıklı ortalamasıdır.",
  },
  {
    t: "2. Faktör tablosu",
    d: "Güneş kaynağı (%45), arazi eğimi ve bakı (%20), uydu arazi örtüsü (%20), saha büyüklüğü (%15). Her satırda ölçülen değer ve açıklaması yer alır; veri alınamayan faktör “veri yok” olarak gösterilir.",
  },
  {
    t: "3. Enerji ve finans",
    d: "Yatay ve panel düzlemi ışınımı, optimum eğim, performans oranı ve kayıp kırılımı, özgül verim, MWp kapasite, yıllık üretim, kapasite faktörü, yatırım tutarı, LCOE ve basit geri ödeme.",
  },
  {
    t: "4. Kırmızı bayraklar",
    d: "Su/ıslak alan izi, olası tarım veya orman niteliği (5403 sayılı Kanun kapsamında izin gerekebilir), yüksek ya da kuzeye bakan eğim gibi yatırımı durdurabilecek bulgular.",
  },
  {
    t: "5. Yapılacaklar",
    d: "Dağıtım şirketinden bağlantı görüşü, zemin etüdü, gerekirse DSİ görüşü gibi bir sonraki somut adımlar.",
  },
  {
    t: "6. Varsayımlar ve yöntem",
    d: "Yatırım maliyeti, enerji fiyatı, iskonto oranı, ömür ve yıllık bozulma raporda açıkça yazılır; talep halinde sizin değerlerinizle yeniden hesaplanır.",
  },
];

export default function SampleReportPage() {
  return (
    <>
      <InnerPageHeader
        title="Örnek rapor: GES fizibilite karnesi"
        subtitle="Panelde ve kurumsal PDF'te aynı yapıda üretilen ön değerlendirme raporu."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 pb-24 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <ol className="space-y-5">
            {BOLUMLER.map((b) => (
              <li key={b.t} className="rounded-[3px] border border-[#223047] bg-[#101826] p-5">
                <h2 className="text-[16px] font-semibold text-[#e6ecf3]">{b.t}</h2>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#a3b1c4]">{b.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[13px] leading-relaxed text-[#94a3b8]">
            Ön fizibilite, sahaya gitmeden önce doğru soruları sormak içindir; saha etüdü, bağlantı görüşü ve resmî
            izinlerin yerini tutmaz.
          </p>
          <Link
            href="/iletisim"
            className="mt-6 inline-flex items-center rounded-[3px] bg-[#e9a23b] px-5 py-3 text-[15px] font-semibold text-[#0a0f17] hover:bg-[#f0b452]"
          >
            Kendi sahanız için karne isteyin
          </Link>
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <KarneOnizleme />
        </div>
      </div>
    </>
  );
}
