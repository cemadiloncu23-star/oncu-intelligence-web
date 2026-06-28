"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Crosshair, SatelliteDish } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Küçük sparkline (saf SVG, nötr) */
function Sparkline() {
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="h-7 w-full" aria-hidden>
      <polyline
        points="0,22 12,16 24,19 36,9 48,13 60,6 72,11 84,4 100,8"
        fill="none"
        stroke="#71717a"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const tiles = [
  { k: "RESOLUTION", v: "30cm / pixel" },
  { k: "PROCESSED AREA", v: "40°01'N 35°28'E" },
  { k: "SPECTRAL BANDS", v: "12 / 12" },
  { k: "LATENCY", v: "142 ms" },
];

const bars = [
  { k: "AI ACCURACY", v: "98.4%", w: "98.4%" },
  { k: "CLOUD COVER", v: "4.1%", w: "4.1%" },
  { k: "COVERAGE", v: "91.7%", w: "91.7%" },
];

const detections = [
  { label: "SOLAR", top: "26%", left: "14%", w: "22%", h: "16%" },
  { label: "URBAN", top: "58%", left: "44%", w: "30%", h: "22%" },
  { label: "WATER", top: "20%", left: "66%", w: "16%", h: "14%" },
];

export default function LiveDashboard() {
  return (
    <section id="canli-veri" className="relative overflow-hidden bg-[#05070d] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">// canlı analiz</p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            İşlem konsolunu canlı görün
          </h2>
        </div>

        {/* === Konsol penceresi === */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="overflow-hidden rounded-md border border-zinc-800 bg-[#070a13]"
        >
          {/* pencere başlık çubuğu */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-[#0a0d16] px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full border border-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full border border-zinc-700" />
              </div>
              <span className="font-mono text-[11px] text-zinc-600">oncu://orbital-analysis</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
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
                className="object-cover opacity-70 grayscale"
              />
              {/* grid katmanı (nötr, çok hafif) */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden
              />
              {/* AI tespit kutuları (nötr) */}
              {detections.map((d) => (
                <div
                  key={d.label}
                  className="absolute border border-zinc-300/60"
                  style={{ top: d.top, left: d.left, width: d.w, height: d.h }}
                >
                  <span className="absolute -top-[15px] left-0 bg-zinc-300 px-1 font-mono text-[8px] font-bold uppercase tracking-wider text-zinc-900">
                    {d.label}
                  </span>
                </div>
              ))}
              {/* tarama çizgisi (çok sönük) */}
              <motion.div
                className="absolute inset-x-0 h-px bg-white/20"
                animate={{ top: ["8%", "92%", "8%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
              <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                <Crosshair className="h-3.5 w-3.5" aria-hidden />
                analyzing
              </div>
              <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-zinc-500">
                39.94°N 32.86°E · Sentinel-2
              </div>
            </div>

            {/* SAĞ — teknik veriler (monospace) */}
            <div className="space-y-4 bg-[#070a13] p-5 font-mono">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                <span className="inline-flex items-center gap-1.5">
                  <SatelliteDish className="h-3.5 w-3.5 text-zinc-500" aria-hidden />
                  telemetry
                </span>
                <span>v2.6.1</span>
              </div>

              {/* metrik kutuları */}
              <div className="grid grid-cols-2 gap-2.5">
                {tiles.map((t) => (
                  <div key={t.k} className="rounded-sm border border-zinc-800 bg-[#0a0d16] p-3">
                    <p className="text-[9px] uppercase tracking-[0.14em] text-zinc-600">{t.k}</p>
                    <p className="mt-1 text-[13px] text-zinc-300">{t.v}</p>
                  </div>
                ))}
              </div>

              {/* progress barlar (nötr, glow yok) */}
              <div className="space-y-3 rounded-sm border border-zinc-800 bg-[#0a0d16] p-3">
                {bars.map((b, i) => (
                  <div key={b.k}>
                    <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-wider">
                      <span className="text-zinc-600">{b.k}</span>
                      <span className="text-zinc-300">{b.v}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: b.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.12, ease }}
                        className="h-full rounded-full bg-zinc-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* sparkline */}
              <div className="rounded-sm border border-zinc-800 bg-[#0a0d16] p-3">
                <div className="mb-1.5 flex items-center justify-between text-[10px] uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5 text-zinc-600">
                    <Activity className="h-3 w-3 text-zinc-500" aria-hidden />
                    change index · 24h
                  </span>
                  <span className="text-zinc-400">+2.3%</span>
                </div>
                <Sparkline />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
