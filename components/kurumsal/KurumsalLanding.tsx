"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Factory,
  FileText,
  Leaf,
  ListChecks,
  MapPinned,
  Menu,
  Satellite,
  ShieldCheck,
  SunMedium,
  TriangleAlert,
  Wrench,
  X,
} from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";
import LayerExplorer from "@/components/flagship/LayerExplorer";
import FlagshipFooter from "@/components/flagship/FlagshipFooter";

/* KutGöz Kurumsal — panel ile aynı palet:
   zemin #0a1018 · yüzey #101826 · kenarlık #223047 · metin #e6ecf3 · ikincil #94a3b8 · vurgu #1f9d5c / #4cc38a */

const NAV = [
  { label: "Çözümler", href: "#cozumler" },
  { label: "Nasıl çalışır", href: "#nasil" },
  { label: "Örnek rapor", href: "#karne" },
  { label: "Metodoloji", href: "#metodoloji" },
  { label: "İletişim", href: "/iletisim" },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#4cc38a]">{children}</p>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#e6ecf3] sm:text-[34px]">{title}</h2>
      {desc ? <p className="mt-4 text-[16px] leading-relaxed text-[#94a3b8]">{desc}</p> : null}
    </div>
  );
}

export function KurumsalNav() {
  const panel = getPanelLink();
  const pathname = usePathname();
  // Alt sayfalarda bölüm bağlantıları ana sayfaya gider
  const h = (href: string) => (href.startsWith("#") && pathname !== "/" ? `/${href}` : href);
  const openDemo = useOpenDemo();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "border-b border-[#223047] bg-[#0a1018]/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Ana menü">
        <a href={pathname === "/" ? "#tepe" : "/"} className="flex items-center gap-2.5" aria-label="ÖNCÜ Intelligence — ana sayfa">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1f9d5c] text-[15px] font-bold text-white">K</span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold text-[#e6ecf3]">KutGöz</span>
            <span className="block text-[10.5px] font-medium tracking-wide text-[#94a3b8]">ÖNCÜ Intelligence</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) =>
            n.href.startsWith("#") ? (
              <a key={n.href} href={h(n.href)} className="text-[14px] font-medium text-[#c3cddb] transition-colors hover:text-white">
                {n.label}
              </a>
            ) : (
              <Link key={n.href} href={n.href} className="text-[14px] font-medium text-[#c3cddb] transition-colors hover:text-white">
                {n.label}
              </Link>
            ),
          )}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={panel.href}
            className="rounded-md border border-[#2e3f5a] px-4 py-2 text-[13.5px] font-semibold text-[#e6ecf3] transition-colors hover:border-[#4cc38a]"
          >
            Panel girişi
          </a>
          <button
            type="button"
            onClick={openDemo}
            className="rounded-md bg-[#1f9d5c] px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#23ad67]"
          >
            Demo talep edin
          </button>
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-[#e6ecf3] lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-[#223047] bg-[#0a1018] px-5 pb-6 pt-2 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={h(n.href)} onClick={() => setOpen(false)} className="block border-b border-[#223047] py-3 text-[15px] text-[#e6ecf3]">
              {n.label}
            </a>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href={panel.href} className="rounded-md border border-[#2e3f5a] py-2.5 text-center text-[14px] font-semibold text-[#e6ecf3]">Panel girişi</a>
            <button type="button" onClick={() => { setOpen(false); openDemo(); }} className="rounded-md bg-[#1f9d5c] py-2.5 text-[14px] font-semibold text-white">Demo talep edin</button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const openDemo = useOpenDemo();
  return (
    <section id="tepe" className="relative overflow-hidden border-b border-[#223047] pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/showcase/ankara-rgb.png" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1018] via-[#0a1018]/90 to-[#0a1018]/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a1018] to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1d4d34] bg-[#0f2a1e] px-3 py-1 text-[12.5px] font-semibold text-[#4cc38a]">
            <SunMedium size={14} /> Güneş enerjisi santralleri için uydu analitiği
          </p>
          <h1 className="text-[38px] font-bold leading-[1.1] tracking-tight text-[#e6ecf3] sm:text-[52px]">
            GES yatırımınızı uydudan değerlendirin, sahanızı uzaktan izleyin.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#a3b1c4]">
            KutGöz; arazinin güneş kaynağını, eğimini ve arazi örtüsünü ölçülmüş verilerle puanlar, yatırım öncesi
            fizibilite karnesi üretir. İşletmedeki santralde tozlanma, bitki istilası ve su birikintisini Sentinel-2
            geçişleriyle takip eder.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-md bg-[#1f9d5c] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#23ad67]"
            >
              Ücretsiz saha ön değerlendirmesi <ArrowRight size={17} />
            </button>
            <a
              href="#karne"
              className="inline-flex items-center gap-2 rounded-md border border-[#2e3f5a] px-5 py-3 text-[15px] font-semibold text-[#e6ecf3] transition-colors hover:border-[#4cc38a]"
            >
              Örnek raporu inceleyin
            </a>
          </div>
          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-[13.5px] text-[#a3b1c4] sm:grid-cols-4">
            {[
              ["10 m", "çözünürlük"],
              ["~5 gün", "yeniden geçiş"],
              ["365 gün", "ışınım verisi"],
              ["A–D", "fizibilite notu"],
            ].map(([v, l]) => (
              <li key={l} className="border-l border-[#2e3f5a] pl-3">
                <span className="block text-[18px] font-bold text-[#e6ecf3]">{v}</span>
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden lg:block">
          <KarneOnizleme compact />
        </div>
      </div>
    </section>
  );
}

function VeriSeridi() {
  const items = [
    { icon: Satellite, t: "Copernicus Sentinel-2 L2A", d: "10 m optik görüntü, bulut maskeli" },
    { icon: SunMedium, t: "ERA5 yeniden analiz", d: "Günlük ışınım, sıcaklık, yağış" },
    { icon: MapPinned, t: "Sayısal yükseklik", d: "Eğim ve bakı hesabı" },
    { icon: ShieldCheck, t: "Veri yoksa uydurma yok", d: "Eksik faktör raporda açıkça belirtilir" },
  ];
  return (
    <section className="border-b border-[#223047] bg-[#0d1420]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {items.map(({ icon: I, t, d }) => (
          <div key={t} className="flex items-start gap-3">
            <I size={20} className="mt-0.5 shrink-0 text-[#4cc38a]" />
            <div>
              <p className="text-[14px] font-semibold text-[#e6ecf3]">{t}</p>
              <p className="text-[13px] text-[#94a3b8]">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function KimlerIcin() {
  const items = [
    { icon: Building2, t: "GES yatırımcıları", d: "Arazi alımından önce kaynağı, kısıtları ve yaklaşık getiriyi görün." },
    { icon: Factory, t: "Geliştirici ve EPC firmaları", d: "Aday sahaları aynı ölçütle karşılaştırın, etüt bütçesini doğru sahaya ayırın." },
    { icon: Wrench, t: "İşletme ve bakım (O&M)", d: "Temizlik ve ot biçme ekibini uydunun işaret ettiği sahaya yönlendirin." },
    { icon: ClipboardCheck, t: "Danışman ve finans kuruluşları", d: "Yöntemi ve varsayımları açık, tekrarlanabilir bir ön değerlendirme raporu alın." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionTitle kicker="Kimler için" title="Karar verenlerin aynı veriye bakmasını sağlar" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: I, t, d }) => (
          <div key={t} className="rounded-xl border border-[#223047] bg-[#101826] p-6">
            <I size={22} className="text-[#4cc38a]" />
            <h3 className="mt-4 text-[16px] font-semibold text-[#e6ecf3]">{t}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8]">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cozumler() {
  const urunler = [
    {
      icon: FileText,
      etiket: "Yatırım öncesi",
      baslik: "Saha fizibilite karnesi",
      metin: "Çizdiğiniz arazi için güneş kaynağı, eğim, arazi örtüsü ve alan; tek puan ve A–D notu.",
      maddeler: [
        "Optimum panel eğimi ve panel düzlemi ışınımı",
        "Sıcaklık ve tozlanma kayıplı performans oranı",
        "Gölgesiz sıra aralığından MWp kapasite",
        "Yıllık üretim, LCOE ve basit geri ödeme",
        "Kırmızı bayraklar: su izi, tarım arazisi, yüksek eğim",
      ],
    },
    {
      icon: Satellite,
      etiket: "İşletmedeki santral",
      baslik: "Uydudan saha izleme",
      metin: "Her yeni Sentinel-2 geçişinde sahanızı kendi geçmişiyle karşılaştırır, değişimi uyarıya çevirir.",
      maddeler: [
        "Tozlanma ve kirlenme eğilimi",
        "Panel aralarında bitki istilası (NDVI artışı)",
        "Su birikintisi / göllenme (MNDWI)",
        "Bulutlu sahneleri eleyen kalite kontrolü",
        "Alarm merkezi, haftalık rapor ve PDF",
      ],
    },
  ];
  return (
    <section id="cozumler" className="border-y border-[#223047] bg-[#0d1420]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionTitle
          kicker="Çözümler"
          title="Yatırım kararından işletmeye, tek platform"
          desc="İki ürün aynı veri altyapısını kullanır: yatırım öncesi değerlendirdiğiniz saha, kurulduktan sonra aynı panelde izlenir."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {urunler.map(({ icon: I, etiket, baslik, metin, maddeler }) => (
            <article key={baslik} className="rounded-xl border border-[#223047] bg-[#101826] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f2a1e] text-[#4cc38a]"><I size={20} /></span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">{etiket}</span>
              </div>
              <h3 className="mt-5 text-[22px] font-bold text-[#e6ecf3]">{baslik}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#a3b1c4]">{metin}</p>
              <ul className="mt-5 space-y-2.5">
                {maddeler.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-[14.5px] text-[#c3cddb]">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#4cc38a]" /> {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NasilCalisir() {
  const adimlar = [
    { n: "1", t: "Sahayı tanımlayın", d: "Panelde araziyi haritada çizin ya da KML / GeoJSON yükleyin." },
    { n: "2", t: "Veri toplanır", d: "Son 365 günün ışınımı, yükseklik ve en güncel bulutsuz Sentinel-2 sahnesi çekilir." },
    { n: "3", t: "Algoritma puanlar", d: "Kaynak, eğim, arazi örtüsü ve alan ağırlıklı olarak puanlanır; kısıtlar bayraklanır." },
    { n: "4", t: "Rapor ve izleme", d: "Karneyi PDF alın; saha kurulduğunda aynı panelden izlemeye devam edin." },
  ];
  return (
    <section id="nasil" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionTitle kicker="Nasıl çalışır" title="Dört adımda ön değerlendirme" />
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {adimlar.map((a) => (
          <li key={a.n} className="relative rounded-xl border border-[#223047] bg-[#101826] p-6">
            <span className="text-[13px] font-bold text-[#4cc38a]">Adım {a.n}</span>
            <h3 className="mt-2 text-[16px] font-semibold text-[#e6ecf3]">{a.t}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8]">{a.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* Panelde gösterilen fizibilite karnesinin site üzerindeki temsili önizlemesi (örnek veri). */
const ORNEK = {
  not: "B",
  hukum: "Uygun — iyileştirme alanları var",
  puan: 76,
  faktorler: [
    { ad: "Güneş kaynağı (özgül verim)", puan: 73, deger: "1.580 kWh/kWp·yıl", agirlik: 45 },
    { ad: "Arazi eğimi ve bakı", puan: 62, deger: "7,5° · güneye bakan", agirlik: 20 },
    { ad: "Arazi örtüsü (uydu)", puan: 80, deger: "NDVI 0,42 · MNDWI −0,31", agirlik: 20 },
    { ad: "Saha büyüklüğü", puan: 100, deger: "24 ha", agirlik: 15 },
  ],
  kv: [
    ["Optimum eğim", "28° · +%9,1 ışınım"],
    ["Performans oranı", "0,80"],
    ["Kapasite", "~19 MWp"],
    ["Yıllık üretim", "~30.000 MWh"],
    ["LCOE", "0,049 USD/kWh"],
  ],
};

export function KarneOnizleme({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-xl border border-[#223047] bg-[#101826]/95 p-6 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#2f6fd6] text-[28px] font-bold text-white">{ORNEK.not}</span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">GES fizibilite karnesi · örnek</p>
          <p className="text-[17px] font-bold text-[#e6ecf3]">{ORNEK.hukum}</p>
          <p className="text-[12.5px] text-[#94a3b8]">Toplam puan <b className="text-[#e6ecf3]">{ORNEK.puan}</b>/100</p>
        </div>
      </div>
      <div className="mt-5 space-y-3.5">
        {ORNEK.faktorler.map((f) => (
          <div key={f.ad}>
            <div className="flex items-baseline justify-between text-[13px]">
              <span className="font-medium text-[#e6ecf3]">{f.ad}</span>
              <span className="font-semibold tabular-nums text-[#e6ecf3]">{f.puan}/100</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded bg-[#162133]">
              <span
                className="block h-full rounded"
                style={{ width: `${f.puan}%`, background: f.puan >= 70 ? "#4cc38a" : "#e5a50a" }}
              />
            </div>
            {!compact ? (
              <p className="mt-1 font-mono text-[12px] text-[#a3b1c4]">{f.deger} · ağırlık %{f.agirlik}</p>
            ) : null}
          </div>
        ))}
      </div>
      {!compact ? (
        <table className="mt-5 w-full text-[13px]">
          <tbody>
            {ORNEK.kv.map(([k, v]) => (
              <tr key={k} className="border-t border-[#223047]">
                <th className="py-2 text-left font-medium text-[#94a3b8]">{k}</th>
                <td className="py-2 text-right tabular-nums text-[#e6ecf3]">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <p className="mt-4 text-[11.5px] text-[#64748b]">Temsili örnek — Konya ili, örnek veriyle hesaplanmıştır.</p>
    </div>
  );
}

function KarneBolumu() {
  const openDemo = useOpenDemo();
  return (
    <section id="karne" className="border-y border-[#223047] bg-[#0d1420]">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionTitle
            kicker="Örnek rapor"
            title="Bir sayfada karar verilebilir fizibilite karnesi"
            desc="Her faktörün puanı, ağırlığı ve dayandığı ölçüm görünür. Veri alınamayan faktör uydurulmaz; raporda “veri yok” yazar ve ağırlığı diğerlerine dağıtılır."
          />
          <ul className="space-y-3">
            {[
              { i: TriangleAlert, t: "Kırmızı bayraklar", d: "Su izi, olası tarım/orman arazisi (5403 sayılı Kanun), yüksek veya kuzeye bakan eğim." },
              { i: ListChecks, t: "Yapılacaklar listesi", d: "Bağlantı görüşü, zemin etüdü, DSİ görüşü gibi bir sonraki somut adımlar." },
              { i: FileText, t: "Kurumsal PDF", d: "Logonuz ve renginizle; varsayımlar ve yöntem raporun içinde." },
            ].map(({ i: I, t, d }) => (
              <li key={t} className="flex gap-3 rounded-lg border border-[#223047] bg-[#101826] p-4">
                <I size={19} className="mt-0.5 shrink-0 text-[#4cc38a]" />
                <div>
                  <p className="text-[15px] font-semibold text-[#e6ecf3]">{t}</p>
                  <p className="text-[14px] text-[#94a3b8]">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={openDemo}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1f9d5c] px-5 py-3 text-[15px] font-semibold text-white hover:bg-[#23ad67]"
          >
            Kendi sahanız için karne isteyin <ArrowRight size={17} />
          </button>
        </div>
        <KarneOnizleme />
      </div>
    </section>
  );
}

function Metodoloji() {
  const satirlar = [
    ["Güneş kaynağı", "ERA5 günlük yatay ışınım (son 365 gün) → Erbs difüz ayrıştırma + izotropik eğik düzlem modeli; 0–45° arası optimum eğim."],
    ["Kayıplar", "Sabit sistem kayıpları, Ross modeliyle hücre sıcaklığı kaybı, yağış rejimi ve zemin örtüsüne göre tozlanma kaybı."],
    ["Arazi", "Yükseklik ızgarasından eğim ve bakı; Sentinel-2'den NDVI, MNDWI ve NDBI (SCL bulut maskeli)."],
    ["Kapasite", "21 Aralık 10:00–14:00 arası gölgesiz sıra aralığından zemin kaplama oranı → MWp/ha."],
    ["Finans", "LCOE (25 yıl, iskonto ve yıllık bozulma ile) ve basit geri ödeme; varsayımlar raporda açıkça listelenir ve değiştirilebilir."],
    ["İzleme", "Her yeni geçiş, sahanın kendi referans dönemiyle karşılaştırılır; yeterli bulutsuz piksel yoksa uyarı üretilmez."],
  ];
  return (
    <section id="metodoloji" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionTitle
        kicker="Metodoloji"
        title="Yöntem açık, varsayımlar görünür"
        desc="Ön fizibilite, sahaya gitmeden önce doğru soruları sormak içindir; saha etüdü ve resmî görüşlerin yerini tutmaz."
      />
      <div className="overflow-hidden rounded-xl border border-[#223047]">
        {satirlar.map(([k, v], i) => (
          <div key={k} className={`grid gap-2 p-5 sm:grid-cols-[200px_1fr] ${i % 2 ? "bg-[#0d1420]" : "bg-[#101826]"}`}>
            <p className="text-[14.5px] font-semibold text-[#e6ecf3]">{k}</p>
            <p className="text-[14.5px] leading-relaxed text-[#a3b1c4]">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-[13px] text-[#94a3b8]">
        <span className="inline-flex items-center gap-1.5"><Leaf size={15} className="text-[#4cc38a]" /> NDVI: bitki örtüsü</span>
        <span className="inline-flex items-center gap-1.5"><Droplets size={15} className="text-[#6ea8fe]" /> MNDWI: su / ıslak alan</span>
        <span className="inline-flex items-center gap-1.5"><Building2 size={15} className="text-[#a3b1c4]" /> NDBI: yapılaşma</span>
      </div>
    </section>
  );
}

function KapanisCTA() {
  const openDemo = useOpenDemo();
  const panel = getPanelLink();
  return (
    <section className="border-t border-[#223047] bg-[#0d1420]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-[26px] font-bold text-[#e6ecf3]">Elinizdeki sahayı birlikte değerlendirelim</h2>
          <p className="mt-2 max-w-2xl text-[15.5px] text-[#a3b1c4]">
            Koordinatı ya da KML dosyasını gönderin; ön değerlendirme karnesini ve yöntem notlarını size iletelim.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={openDemo} className="inline-flex items-center gap-2 rounded-md bg-[#1f9d5c] px-5 py-3 text-[15px] font-semibold text-white hover:bg-[#23ad67]">
            Demo talep edin <ArrowRight size={17} />
          </button>
          <a href={panel.href} className="inline-flex items-center gap-2 rounded-md border border-[#2e3f5a] px-5 py-3 text-[15px] font-semibold text-[#e6ecf3] hover:border-[#4cc38a]">
            Panel girişi <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function KurumsalLanding() {
  return (
    <main id="main" className="min-h-screen bg-[#0a1018] text-[#e6ecf3] antialiased selection:bg-[#1f9d5c]/30">
      <KurumsalNav />
      <Hero />
      <VeriSeridi />
      <KimlerIcin />
      <Cozumler />
      <NasilCalisir />
      <div id="katmanlar" className="border-t border-[#223047]">
        <LayerExplorer />
      </div>
      <KarneBolumu />
      <Metodoloji />
      <KapanisCTA />
      <div className="border-t border-[#223047]">
        <FlagshipFooter />
      </div>
    </main>
  );
}
