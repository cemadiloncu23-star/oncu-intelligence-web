"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Thermometer, Droplets, Sprout, Building2 } from "lucide-react";

type Layer = {
  id: string;
  label: string;
  code: string;
  hint: string;
  src: string;
  icon: typeof Satellite;
  accent: string;
};

const layers: Layer[] = [
  { id: "rgb", label: "Gerçek renk", code: "RGB / TCI", hint: "Doğal renk uydu görüntüsü.", src: "/showcase/ankara-rgb.png", icon: Satellite, accent: "#38BDF8" },
  { id: "termal", label: "Termal", code: "LST", hint: "Yüzey sıcaklığı görselleştirmesi.", src: "/showcase/ankara-termal.png", icon: Thermometer, accent: "#fb923c" },
  { id: "su", label: "Su", code: "NDWI", hint: "Su kaynakları ve nem indeksi.", src: "/showcase/ankara-su.png", icon: Droplets, accent: "#38BDF8" },
  { id: "tarim", label: "Tarım", code: "NDVI", hint: "Bitki örtüsü yoğunluğu.", src: "/showcase/ankara-tarim.png", icon: Sprout, accent: "#4ade80" },
  { id: "yapi", label: "Yapılaşma", code: "NDBI", hint: "Kentsel doku çıkarımı.", src: "/showcase/ankara-yapi.png", icon: Building2, accent: "#f87171" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LayerExplorer() {
  const [active, setActive] = useState<Layer>(layers[0]);

  return (
    <section id="katmanlar" className="relative scroll-mt-16 overflow-hidden bg-[#030712] py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[140px]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#38BDF8]">
            // veri katmanları
          </p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Tek pas, beş analiz katmanı
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Aynı uydu geçişinden türetilen katmanlar — gerçek renkten termal, su, tarım ve yapılaşma çıkarımına kadar.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* görüntü */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(15,23,42,0.6)] p-2.5 backdrop-blur-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-square lg:aspect-[5/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={`Ankara — ${active.label} katmanı`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-slate-200">
                <span>Ankara · 39.94N 32.86E</span>
                <span style={{ color: active.accent }}>{active.code}</span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-8">
                <p className="font-[family-name:var(--font-inter)] text-base font-bold text-white">{active.label}</p>
                <p className="mt-0.5 text-xs text-slate-300">{active.hint}</p>
              </div>
            </div>
          </div>

          {/* seçici */}
          <div className="flex flex-col gap-2.5">
            {layers.map((layer) => {
              const isActive = layer.id === active.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActive(layer)}
                  aria-pressed={isActive}
                  className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-[#38BDF8]/40 bg-[rgba(56,189,248,0.06)]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors"
                    style={{
                      borderColor: isActive ? `${layer.accent}55` : "rgba(255,255,255,0.08)",
                      backgroundColor: isActive ? `${layer.accent}14` : "rgba(255,255,255,0.02)",
                      color: isActive ? layer.accent : "#94a3b8",
                    }}
                  >
                    <layer.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-[family-name:var(--font-inter)] text-sm font-bold text-white">{layer.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{layer.code}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-slate-400">{layer.hint}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
