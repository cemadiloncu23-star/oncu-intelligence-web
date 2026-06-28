"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Crosshair, SatelliteDish } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Küçük sparkline (saf SVG) */
function Sparkline({ color = "#38BDF8" }: { color?: string }) {
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="h-7 w-full" aria-hidden>
      <defs>
        <linearGradient id={`sl-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points="0,22 12,16 24,19 36,9 48,13 60,6 72,11 84,4 100,8"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="0,22 12,16 24,19 36,9 48,13 60,6 72,11 84,4 100,8 100,28 0,28" fill={`url(#sl-${color})`} />
    </svg>
  );
}

const tiles = [
  { k: "RESOLUTION", v: "30cm / pixel", c: "#38BDF8" },
  { k: "PROCESSED AREA", v: "40°01'N 35°28'E", c: "#38BDF8" },
  { k: "SPECTRAL BANDS", v: "12 / 12", c: "#4ade80" },
  { k: "LATENCY", v: "142 ms", c: "#4ade80" },
];

const bars = [
  { k: "AI ACCURACY", v: "98.4%", w: "98.4%", c: "#4ade80" },
  { k: "CLOUD COVER", v: "4.1%", w: "4.1%", c: "#38BDF8" },
  { k: "COVERAGE", v: "91.7%", w: "91.7%", c: "#38BDF8" },
];

const detections = [
  { label: "SOLAR", top: "26%", left: "14%", w: "22%", h: "16%" },
  { label: "URBAN", top: "58%", left: "44%", w: "30%", h: "22%" },
  { label: "WATER", top: "20%", left: "66%", w: "16%", h: "14%" },
];

export default function LiveDashboard() {
  return (
    <section id="canli-veri" className="relative overflow-hidden bg-[#030712] py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[120px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#38BDF8]">// canlı analiz</p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            İşlem konsolunu canlı görün
          </h2>
        </div>

        {/* === Konsol penceresi === */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="overflow-hidden rounded-xl border border-zinc-800 bg-[#070a13] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
        >
          {/* pencere başlık çubuğu */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-[#0b1120] px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="font-mono text-[11px] text-slate-500">oncu://orbital-analysis</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#4ade80]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
              </span>
              LIVE
            </span>
          </div>

          {/* gövde */}
          <div className="grid gap-px bg-zinc-800 lg:grid-cols-[1.25fr_1fr]">
            {/* SOL — uydu görüntüsü + tarama */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#070a13] lg:aspect-auto">
              <Image
                src="/showcase/ankara-rgb.png"
                alt="İşlenen uydu görüntüsü"
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover opacity-80"
              />
              {/* grid katmanı */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(56,189,248,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.25) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden
              />
              {/* AI tespit kutuları */}
              {detections.map((d) => (
                <div
                  key={d.label}
                  className="absolute rounded-[2px] border border-[#4ade80]/80 shadow-[0_0_18px_-4px_rgba(74,222,128,0.6)]"
                  style={{ top: d.top, left: d.left, width: d.w, height: d.h }}
                >
                  <span className="absolute -top-4 left-0 bg-[#4ade80] px-1 font-mono text-[8px] font-bold uppercase tracking-wider text-[#03200f]">
                    {d.label}
                  </span>
                </div>
              ))}
              {/* tarama çizgisi */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_14px_rgba(56,189,248,0.9)]"
                animate={{ top: ["6%", "94%", "6%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
              {/* nişangah + durum */}
              <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#38BDF8]">
                <Crosshair className="h-3.5 w-3.5" aria-hidden />
                analyzing
              </div>
              <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-slate-300">
                39.94°N 32.86°E · Sentinel-2
              </div>
            </div>

            {/* SAĞ — teknik veriler (monospace) */}
            <div className="space-y-4 bg-[#070a13] p-5 font-mono">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <SatelliteDish className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden />
                  telemetry
                </span>
                <span>v2.6.1</span>
              </div>

              {/* metrik kutuları */}
              <div className="grid grid-cols-2 gap-2.5">
                {tiles.map((t) => (
                  <div key={t.k} className="rounded-md border border-zinc-800 bg-[#0b1120] p-3">
                    <p className="text-[9px] uppercase tracking-[0.14em] text-slate-500">{t.k}</p>
                    <p className="mt-1 text-[13px]" style={{ color: t.c }}>
                      {t.v}
                    </p>
                  </div>
                ))}
              </div>

              {/* progress barlar */}
              <div className="space-y-3 rounded-md border border-zinc-800 bg-[#0b1120] p-3">
                {bars.map((b, i) => (
                  <div key={b.k}>
                    <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-wider">
                      <span className="text-slate-500">{b.k}</span>
                      <span style={{ color: b.c }}>{b.v}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: b.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.12, ease }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: b.c, boxShadow: `0 0 10px ${b.c}80` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* sparkline */}
              <div className="rounded-md border border-zinc-800 bg-[#0b1120] p-3">
                <div className="mb-1.5 flex items-center justify-between text-[10px] uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <Activity className="h-3 w-3 text-[#38BDF8]" aria-hidden />
                    change index · 24h
                  </span>
                  <span className="text-[#4ade80]">+2.3%</span>
                </div>
                <Sparkline color="#38BDF8" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
