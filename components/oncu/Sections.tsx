"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Database, Layers, Share2, SunMedium, Wind, Droplets, Flame, Github, Linkedin, Twitter, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useLang } from "./lang";
import { IMG, Sat, Reveal, SpotCard, Eyebrow, mono, display } from "./ui";

function Head({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`${display} mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl`}>{title}</h2>
      {sub && <p className="mt-4 text-slate-400">{sub}</p>}
    </Reveal>
  );
}

export function Pipeline() {
  const { L } = useLang();
  const steps = [
    { i: Database, n: "01", t: L("Çoklu Uydu Veri Toplama", "Multi-satellite Ingestion"), d: L("Optik, çok spektrumlu (Sentinel-2) ve SAR uydu akışları kesintisiz olarak tek merkezde toplanır.", "Optical, multispectral (Sentinel-2) and SAR streams are continuously collected in one place.") },
    { i: Layers, n: "02", t: L("Yapay Zeka Destekli Veri Füzyonu", "AI-driven Data Fusion"), d: L("Görüntü işleme modellerimiz tozlanma, bitki istilası, gölgelenme, su birikintisi ve termal anomalileri hassasiyetle ölçer.", "Our imaging models quantify soiling, vegetation encroachment, shading, standing water and thermal anomalies precisely.") },
    { i: Share2, n: "03", t: L("Karar Odaklı Zeka ve Entegrasyon", "Decision Intelligence & Integration"), d: L("Sonuçlar KutGöz web paneline, otomatik PDF fizibilite raporlarına veya SCADA/ERP sistemlerinize REST API ile aktarılır.", "Results flow to the KutGöz web panel, automated PDF feasibility reports, or your SCADA/ERP via REST API.") },
  ];
  return (
    <section id="metodoloji" className="bg-[#071124] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head eyebrow={L("Nasıl Çalışır?", "How it works")} title={L("3 adımlı yörünge veri hattı", "A three-step orbital data pipeline")} />
        <div className="relative grid gap-5 md:grid-cols-3">
          <svg className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px w-full md:block" aria-hidden>
            <line x1="12%" x2="88%" y1="0" y2="0" stroke="#3B82F6" strokeOpacity="0.5" strokeDasharray="4 6">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.6s" repeatCount="indefinite" />
            </line>
          </svg>
          {steps.map((s, k) => (
            <Reveal key={s.n} delay={k * 0.1}>
              <SpotCard className="h-full p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#3B82F6]/40 bg-[#0B172E]"><s.i className="h-5 w-5 text-[#3B82F6]" strokeWidth={1.5} /></span>
                  <span className={`${mono} text-sm text-slate-500`}>{s.n} /</span>
                </div>
                <h3 className={`${display} text-lg font-semibold text-white`}>{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.d}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Platform() {
  const { L } = useLang();
  const tabs = [
    { t: L("Yatırım Öncesi Fizibilite", "Pre-investment Feasibility"), img: IMG.ges, tag: "FEASIBILITY", pts: [L("Işınım", "Irradiance"), L("Eğim / Bakı", "Slope / Aspect"), L("Arazi örtüsü", "Land cover")], series: [30, 42, 48, 55, 62, 70, 76] },
    { t: L("Tozlanma ve Bitki Takibi", "Soiling & Vegetation"), img: IMG.veg, tag: "NDVI", pts: ["NDVI", L("Toz indeksi", "Dust index"), L("Bitki istilası", "Encroachment")], series: [20, 24, 31, 38, 52, 47, 41] },
    { t: L("Termal ve Anomali Alarmları", "Thermal & Anomaly Alerts"), img: IMG.thermal, tag: "THERMAL", pts: [L("Yüzey sıcaklığı", "Surface temp."), L("Rüzgar / dolu", "Wind / hail"), L("Yangın", "Fire")], series: [55, 50, 58, 66, 61, 72, 80] },
    { t: L("API ve Otomatik Raporlama", "API & Automated Reporting"), img: IMG.infra, tag: "REST API", pts: ["PDF", "JSON", "SCADA / ERP"], series: [10, 25, 40, 55, 70, 85, 95] },
  ];
  const [i, setI] = useState(0);
  const cur = tabs[i];
  const pts = cur.series.map((v, k) => `${k * 50},${100 - v}`).join(" ");
  return (
    <section id="platform" className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head eyebrow="KutGöz" title={L("Tek platform. Tam saha hakimiyeti.", "One platform. Full site command.")} />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-2" role="tablist">
            {tabs.map((t, k) => (
              <button key={t.tag} role="tab" aria-selected={i === k} onClick={() => setI(k)} className={`odak rounded-xl border px-5 py-4 text-left transition-colors ${i === k ? "border-[#3B82F6]/60 bg-[#0B172E]" : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]"}`}>
                <span className={`${mono} text-[10px] tracking-[0.2em] ${i === k ? "text-[#3B82F6]" : "text-slate-500"}`}>0{k + 1} • {t.tag}</span>
                <span className={`${display} mt-1 block text-base ${i === k ? "text-white" : "text-slate-300"}`}>{t.t}</span>
              </button>
            ))}
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#071124]">
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                <Sat src={cur.img} overlay={0.4} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                <div className={`${mono} absolute left-4 top-4 flex gap-2 text-[10px]`}>
                  {cur.pts.map((p) => (
                    <span key={p} className="rounded border border-white/15 bg-[#030712]/70 px-2 py-1 text-slate-200">{p}</span>
                  ))}
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/[0.1] bg-[#030712]/75 p-4 backdrop-blur-md">
                  <div className={`${mono} mb-2 text-[10px] tracking-[0.16em] text-slate-400`}>{L("ZAMAN SERİSİ • SON 7 GEÇİŞ", "TIME SERIES • LAST 7 PASSES")}</div>
                  <svg viewBox="0 0 300 100" className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
                    <motion.polyline key={i} points={pts} fill="none" stroke="#3B82F6" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1 }} />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sectors() {
  const { L } = useLang();
  const items = [
    { i: SunMedium, t: L("Güneş Enerjisi (GES)", "Solar (PV)"), d: L("Yatırım öncesi fizibilite puanlaması, panel tozlanması ve bitki istilası takibi.", "Pre-investment feasibility scoring, panel soiling and vegetation encroachment monitoring."), img: IMG.ges, k: "SOLAR", span: "md:col-span-2" },
    { i: Wind, t: L("Rüzgar Enerjisi (RES)", "Wind"), d: L("Arazi/eğim analizi, çevre kullanım takibi ve erişim yolu bütünlüğü izleme.", "Terrain/slope analysis, land-use tracking and access-road integrity monitoring."), img: IMG.res, k: "WIND", span: "" },
    { i: Droplets, t: L("Hidroelektrik (HES)", "Hydropower"), d: L("Rezervuar su seviyesi, sediment takibi ve havza anomali tespiti.", "Reservoir level, sediment tracking and basin anomaly detection."), img: IMG.hes, k: "HYDRO", span: "" },
    { i: Flame, t: L("Petrol, Gaz ve Kritik Altyapı", "Oil, Gas & Critical Infrastructure"), d: L("Boru hattı koridor güvenliği, izinsiz yaklaşım ve çevresel risk analizi.", "Pipeline corridor safety, unauthorised encroachment and environmental risk analysis."), img: IMG.infra, k: "O&G", span: "md:col-span-2" },
  ];
  return (
    <section id="sektorler" className="bg-[#071124] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head eyebrow={L("Sektörel Çözümler", "Industry solutions")} title={L("Her enerji varlığı için yörünge görünürlüğü", "Orbital visibility for every energy asset")} />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((s, k) => (
            <Reveal key={s.k} delay={k * 0.07} className={s.span}>
              <SpotCard className="h-64 cursor-default">
                <Sat src={s.img} zoom overlay={0.62} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#EAB308]"><s.i className="h-5 w-5" strokeWidth={1.5} /><span className={`${mono} text-[10px] tracking-[0.2em] text-slate-400`}>{s.k}</span></div>
                  <h3 className={`${display} text-xl font-semibold text-white`}>{s.t}</h3>
                  <p className="mt-2 max-w-md text-sm text-slate-300 opacity-80 transition-opacity duration-300 group-hover:opacity-100">{s.d}</p>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SampleReport() {
  const { L } = useLang();
  return (
    <section id="rapor" className="bg-[#030712] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.12]">
            <Sat src={IMG.hero} overlay={0.7} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-[#0B172E]/60" />
            <div className="relative flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-2xl">
                <h2 className={`${display} text-2xl font-semibold text-white sm:text-3xl`}>{L("Yörünge analitiğini canlı verilerle deneyimleyin.", "Experience orbital analytics with live data.")}</h2>
                <p className="mt-3 text-slate-300">{L("Gerçek Sentinel-2 görüntileriyle oluşturulmuş örnek saha fizibilite raporunu inceleyin.", "Review a sample site feasibility report built from real Sentinel-2 imagery.")}</p>
              </div>
              <a href="/ornek-rapor" className="odak inline-flex shrink-0 items-center gap-2 rounded-md bg-[#D97706] px-6 py-3 text-sm font-semibold text-[#030712] transition-colors hover:bg-[#EAB308]">
                {L("Örnek Raporu Aç", "Open Sample Report")} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Vision() {
  const { L } = useLang();
  const logos = ["Copernicus / Sentinel-2", "ESA", "TÜBİTAK BİGG", "Erciyes Teknopark", "NASA Earthdata"];
  return (
    <section id="hakkimizda" className="bg-[#071124] py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <blockquote className={`${display} text-2xl font-medium leading-snug text-white sm:text-3xl`}>
            “{L("Sürdürülebilir enerji altyapısı, hassas mühendislik ve doğrulanabilir veriyle büyür.", "Sustainable energy infrastructure grows on precision engineering and verifiable data.")}”
          </blockquote>
          <p className={`${mono} mt-5 text-[11px] tracking-[0.2em] text-slate-500`}>ÖNCÜ INTELLIGENCE</p>
        </Reveal>
      </div>
      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-5">
          {logos.map((l) => (
            <div key={l} className={`${mono} flex h-20 items-center justify-center bg-[#071124] px-3 text-center text-[11px] tracking-wider text-slate-500 grayscale`}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  const { L } = useLang();
  const posts = [
    { t: L("GES Varlık Yönetiminde Optik + SAR Veri Füzyonu Neden Kritik?", "Why Optical + SAR Fusion Matters in PV Asset Management"), c: L("Veri Füzyonu", "Data Fusion"), m: "8 " + L("dk", "min") },
    { t: L("5 Günlük Uydu Geçiş Döngüsüyle İşletme ve Bakım (O&M) Kayıplarını Azaltmak", "Reducing O&M Losses with a 5-day Satellite Revisit Cycle"), c: "O&M", m: "6 " + L("dk", "min") },
    { t: L("Büyük Ölçekli Enerji Yatırımlarında Otomatik Fizibilite Puanlama Metodolojisi", "Automated Feasibility Scoring for Utility-scale Energy Investments"), c: L("Metodoloji", "Methodology"), m: "11 " + L("dk", "min") },
  ];
  return (
    <section id="yayinlar" className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head eyebrow={L("İçgörüler", "Insights")} title={L("Teknik yayınlar ve araştırmalar", "Technical publications and research")} />
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p, k) => (
            <Reveal key={p.c} delay={k * 0.08}>
              <a href="/blog" className="odak block h-full">
                <SpotCard className="h-full p-6 transition-colors hover:border-white/20">
                  <div className={`${mono} mb-8 flex justify-between text-[10px] tracking-[0.18em] text-slate-500`}><span className="text-[#3B82F6]">{p.c.toUpperCase()}</span><span>{p.m}</span></div>
                  <h3 className={`${display} text-lg font-semibold leading-snug text-white`}>{p.t}</h3>
                  <span className="mt-8 inline-flex items-center gap-1 text-sm text-slate-400 group-hover:text-white">{L("Oku", "Read")} <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></span>
                </SpotCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFooter() {
  const { L } = useLang();
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      const r = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, source: "demo-talebi" }) });
      if (!r.ok) throw new Error(String(r.status));
      setSent(true);
    } catch {
      setErr(L("Gönderilemedi. Lütfen info@oncuintelligence.com adresine yazın.", "Could not send. Please email info@oncuintelligence.com."));
    } finally {
      setBusy(false);
    }
  };
  const cols = [
    [L("Platform", "Platform"), [L("KutGöz Paneli", "KutGöz Panel"), L("Örnek Rapor", "Sample Report"), L("Paketler", "Pricing")], ["https://panel.oncuintelligence.com", "/ornek-rapor", "/paketler"]],
    [L("Sektörler", "Industries"), ["GES", "RES", "HES", L("Petrol & Gaz", "Oil & Gas")], ["#sektorler", "#sektorler", "#sektorler", "#sektorler"]],
    [L("Kurumsal", "Company"), [L("Hakkımızda", "About"), L("Blog", "Blog"), L("İletişim", "Contact")], ["#hakkimizda", "/blog", "/iletisim"]],
    [L("Yasal ve Güvenlik", "Legal & Security"), [L("Güven Merkezi", "Trust Center"), "KVKK", L("Gizlilik", "Privacy")], ["/guven", "/kvkk", "/gizlilik"]],
  ] as const;
  return (
    <>
      <section id="demo" className="relative overflow-hidden border-t border-white/[0.08] bg-[#0B172E] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className={`${display} text-3xl font-semibold text-white sm:text-4xl`}>{L("Altyapınızı yörüngeden izlemeye hazır mısınız?", "Ready to monitor your infrastructure from orbit?")}</h2>
            {sent ? (
              <p className="mt-8 inline-flex items-center gap-2 text-[#EAB308]"><Check className="h-5 w-5" strokeWidth={1.5} /> {L("Talebiniz alındı, en kısa sürede dönüş yapacağız.", "Request received, we will get back to you shortly.")}</p>
            ) : (
              <form onSubmit={submit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={L("kurumsal@sirketiniz.com", "name@company.com")} aria-label="E-posta" className="odak flex-1 rounded-md border border-white/[0.14] bg-[#030712]/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:border-[#3B82F6]" />
                <button disabled={busy} className="odak rounded-md bg-[#D97706] px-6 py-3 text-sm font-semibold text-[#030712] transition-colors hover:bg-[#EAB308] disabled:opacity-60">{busy ? "…" : L("Demo Talep Edin", "Request a demo")}</button>
              </form>
            )}
            {err && <p className="mt-3 text-sm text-red-300">{err}</p>}
          </Reveal>
        </div>
      </section>
      <footer className="border-t border-white/[0.08] bg-[#030712] pb-8 pt-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className={`${display} text-lg font-semibold text-white`}>ÖNCÜ Intelligence</div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">{L("Enerji ve kritik altyapı için uydu tabanlı, karar odaklı analitik.", "Satellite-based, decision-grade analytics for energy and critical infrastructure.")}</p>
          </div>
          {cols.map(([h, names, hrefs]) => (
            <div key={h}>
              <div className={`${mono} mb-4 text-[10px] tracking-[0.2em] text-slate-500`}>{h.toUpperCase()}</div>
              <ul className="space-y-2.5">
                {names.map((n, k) => (
                  <li key={n}><a href={hrefs[k]} className="odak text-sm text-slate-400 hover:text-white">{n}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.08] px-5 pt-6 sm:px-8 md:flex-row">
          <p className={`${mono} text-[11px] text-slate-500`}>Contains modified Copernicus Sentinel data (2026). © 2026 ÖNCÜ Intelligence. {L("Tüm hakları saklıdır.", "All rights reserved.")}</p>
          <div className="flex gap-4 text-slate-500">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="odak hover:text-white"><Linkedin className="h-4 w-4" strokeWidth={1.5} /></a>
            <a href="https://x.com/oncuintel" aria-label="X" className="odak hover:text-white"><Twitter className="h-4 w-4" strokeWidth={1.5} /></a>
            <a href="https://github.com/cemadiloncu23-star" aria-label="GitHub" className="odak hover:text-white"><Github className="h-4 w-4" strokeWidth={1.5} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
