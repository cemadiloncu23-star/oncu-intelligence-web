"use client";

import { AnimatePresence, motion, useInView, animate } from "framer-motion";
import { ArrowRight, X, Menu, Satellite } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./lang";
import { IMG, Sat, Crosshairs, mono, display, ease } from "./ui";

const DEMO = "#demo";
const PANEL = "https://panel.oncuintelligence.com";

export function AnnouncementBar() {
  const { L } = useLang();
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-[60] border-b border-white/[0.08] bg-[#0B172E] px-10 py-2 text-center text-xs text-slate-300">
      <span className={mono}>
        {L(
          "KutGöz v2 Yayında: Büyük Ölçekli Enerji Santralleri İçin Otomatik Sentinel-2 ve Termal Anomali Tespiti — ",
          "KutGöz v2 is live: Automated Sentinel-2 and thermal anomaly detection for utility-scale energy plants — "
        )}
        <a href="#platform" className="text-white underline-offset-4 hover:underline">
          {L("İncele →", "Explore →")}
        </a>
      </span>
      <button aria-label={L("Bandı kapat", "Dismiss")} onClick={() => setOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
        <X className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </div>
  );
}

export function Navbar() {
  const { lang, setLang, L } = useLang();
  const [mob, setMob] = useState(false);
  const links = [
    [L("Platform", "Platform"), "#platform"],
    [L("Sektörler", "Industries"), "#sektorler"],
    [L("Metodoloji", "Methodology"), "#metodoloji"],
    [L("Yayınlar", "Insights"), "#yayinlar"],
    [L("Hakkımızda", "About"), "#hakkimizda"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#030712]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="ÖNCÜ Intelligence">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden>
            <path d="M13 2 24 8v10l-11 6L2 18V8z" />
            <path d="M13 8v10M8 11l5 3 5-3" stroke="#3B82F6" />
          </svg>
          <span className="leading-none">
            <span className={`${display} block text-[15px] font-semibold tracking-wide text-white`}>ÖNCÜ Intelligence</span>
            <span className={`${mono} block text-[10px] tracking-[0.2em] text-slate-400`}>KutGöz</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="text-sm text-slate-400 transition-colors hover:text-white">
              {t}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className={`${mono} flex overflow-hidden rounded-md border border-white/[0.12] text-[11px]`} role="group" aria-label="Language">
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2.5 py-1.5 uppercase transition-colors ${lang === l ? "bg-[#2563EB] text-white" : "text-slate-400 hover:text-white"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href={PANEL} className="rounded-md border border-white/[0.14] px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/[0.05]">
            {L("Panel Girişi", "Sign in")}
          </a>
          <a href={DEMO} className="rounded-md bg-[#D97706] px-4 py-2 text-sm font-semibold text-[#030712] transition-colors hover:bg-[#EAB308]">
            {L("Demo Talep Edin", "Request a demo")}
          </a>
        </div>
        <button className="text-white lg:hidden" onClick={() => setMob((v) => !v)} aria-label="Menu" aria-expanded={mob}>
          {mob ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>
      <AnimatePresence>
        {mob && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/[0.08] bg-[#030712]/95 lg:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map(([t, h]) => (
                <a key={h} href={h} onClick={() => setMob(false)} className="rounded px-2 py-2.5 text-slate-300 hover:bg-white/[0.04]">
                  {t}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                {(["tr", "en"] as const).map((l) => (
                  <button key={l} onClick={() => setLang(l)} className={`${mono} rounded border px-3 py-1.5 text-xs uppercase ${lang === l ? "border-[#2563EB] bg-[#2563EB] text-white" : "border-white/15 text-slate-400"}`}>
                    {l}
                  </button>
                ))}
                <a href={PANEL} className="ml-auto rounded border border-white/15 px-3 py-1.5 text-sm text-slate-200">{L("Panel Girişi", "Sign in")}</a>
                <a href={DEMO} onClick={() => setMob(false)} className="rounded bg-[#D97706] px-3 py-1.5 text-sm font-semibold text-[#030712]">{L("Demo", "Demo")}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Counter({ to, run }: { to: number; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [run, to]);
  return <>{v}</>;
}

function FeasibilityCard() {
  const { L } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const tabs = [
    { id: "optik", label: L("Optik", "Optical"), img: IMG.ges, filter: "", note: L("Sentinel-2 • 10 m • 20 Ağu 2026", "Sentinel-2 • 10 m • 20 Aug 2026") },
    { id: "termal", label: L("Termal", "Thermal"), img: IMG.thermal, filter: "", note: L("Landsat 8 • yüzey sıcaklığı • 8 Eyl 2026", "Landsat 8 • surface temp. • 8 Sep 2026") },
    { id: "toz", label: L("Tozlanma", "Soiling"), img: IMG.veg, filter: "", note: L("Sentinel-2 • NDVI • 20 Ağu 2026", "Sentinel-2 • NDVI • 20 Aug 2026") },
  ];
  const [tab, setTab] = useState(0);
  const bars = [
    [L("Güneş Kaynağı", "Solar Resource"), 88],
    [L("Arazi Eğimi ve Bakı", "Slope & Aspect"), 74],
    [L("Arazi Örtüsü", "Land Cover"), 69],
    [L("Saha Büyüklüğü", "Site Size"), 81],
  ] as const;
  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-md">
      <div className={`${mono} flex items-center justify-between border-b border-white/[0.08] px-4 py-3 text-[11px] tracking-[0.16em] text-slate-300`}>
        <span>{L("GES FİZİBİLİTE KARNESİ • ÖRNEK", "PV FEASIBILITY SCORECARD • SAMPLE")}</span>
        <span className="text-slate-500">A–D</span>
      </div>
      <div className="relative h-52 overflow-hidden bg-[#071124]">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} className="absolute inset-0">
            <Sat src={tabs[tab].img} overlay={tab === 0 ? 0.25 : 0.1} pos="right top" />
          </motion.div>
        </AnimatePresence>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 208" preserveAspectRatio="none" aria-hidden>
          <motion.polygon
            points="314,6 394,4 397,78 318,82"
            fill="rgba(37,99,235,0.12)"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>
        <div className={`${mono} absolute bottom-2 left-3 rounded bg-[#030712]/70 px-2 py-1 text-[10px] text-slate-200`}>37.7360° K, 33.5560° D • KARAPINAR / KONYA</div>
        <div className={`${mono} absolute right-3 top-2 rounded bg-[#030712]/70 px-2 py-1 text-[10px] text-slate-300`}>{tabs[tab].note}</div>
      </div>
      <div className="flex border-b border-white/[0.08]" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === i}
            onClick={() => setTab(i)}
            className={`${mono} flex-1 border-b-2 px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] transition-colors ${tab === i ? "border-[#3B82F6] text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className={`${display} text-4xl font-semibold text-white`}>
              <Counter to={76} run={inView} />
              <span className="text-xl text-slate-500">/100</span>
            </div>
            <div className="text-xs text-slate-400">{L("Uygun, iyileştirme alanları var", "Suitable, with room for improvement")}</div>
          </div>
          <div className={`${mono} rounded border border-[#D97706]/50 px-3 py-1 text-lg text-[#EAB308]`}>B</div>
        </div>
        <div className="space-y-2.5">
          {bars.map(([n, v], i) => (
            <div key={n}>
              <div className="mb-1 flex justify-between text-[11px] text-slate-400">
                <span>{n}</span>
                <span className={mono}>{v}</span>
              </div>
              <div className="h-1 rounded bg-white/[0.08]">
                <motion.div className="h-1 rounded bg-[#3B82F6]" initial={{ width: 0 }} animate={inView ? { width: `${v}%` } : {}} transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { L } = useLang();
  const metrics = [
    ["10 m", L("Mekansal Çözünürlük", "Spatial Resolution")],
    ["~5 " + L("Gün", "days"), L("Yeniden Geçiş", "Revisit")],
    ["365 " + L("Gün", "days"), L("Işınım ve Tarihsel Veri", "Irradiance & Historical Data")],
    ["A–D", L("Otomatik Fizibilite Notu", "Automated Feasibility Grade")],
  ];
  return (
    <section className="relative isolate overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 -z-10">
        <Sat src={IMG.hero} overlay={0.62} className="scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-[#030712]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <motion.div
          className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-[#3B82F6] to-transparent"
          initial={{ left: "-2%" }}
          animate={{ left: "102%" }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <Crosshairs />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-16 lg:pt-24">
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className={`${mono} mb-7 inline-flex items-center gap-2.5 rounded border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-[11px] tracking-[0.16em] text-slate-300`}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            </span>
            [ {L("CANLI YÖRÜNGE ANALİTİĞİ • KÜRESEL KAPSAMA", "LIVE ORBITAL ANALYTICS • GLOBAL COVERAGE")} ]
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }} className={`${display} text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl`}>
            {L("Yörüngeden sahaya, karar odaklı zeka.", "From orbit to site, decision-grade intelligence.")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            {L(
              "ÖNCÜ Intelligence, çok bantlı uydu görüntülerini yapay zekayla birleştirerek yatırım öncesi saha fizibilitesi üretir. İşletmedeki santrallerde tozlanma, bitki istilası, su birikintisi ve termal anomalileri otomatik tespit eder.",
              "ÖNCÜ Intelligence fuses multispectral satellite imagery with AI to produce pre-investment site feasibility. For operating plants it automatically detects soiling, vegetation encroachment, standing water and thermal anomalies."
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }} className="mt-8 flex flex-wrap gap-3">
            <a href={DEMO} className="inline-flex items-center gap-2 rounded-md bg-[#D97706] px-5 py-3 text-sm font-semibold text-[#030712] transition-colors hover:bg-[#EAB308]">
              {L("Ücretsiz Saha Ön Değerlendirmesi", "Free Site Pre-assessment")} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#rapor" className="inline-flex items-center gap-2 rounded-md border border-white/[0.16] px-5 py-3 text-sm text-slate-100 transition-colors hover:bg-white/[0.05]">
              <Satellite className="h-4 w-4" strokeWidth={1.5} /> {L("Örnek Raporu İnceleyin", "View a Sample Report")}
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }}>
          <FeasibilityCard />
        </motion.div>
      </div>
      <div className="border-t border-white/[0.08] bg-[#030712]/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {metrics.map(([v, l], i) => (
            <div key={l} className={`py-5 pr-4 ${i > 0 ? "lg:border-l lg:border-white/[0.08] lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-white/[0.08] pl-5 lg:pl-8" : ""}`}>
              <div className={`${mono} text-2xl text-white`}>{v}</div>
              <div className="mt-1 text-xs text-slate-500">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
