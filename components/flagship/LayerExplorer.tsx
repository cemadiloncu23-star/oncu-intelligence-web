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
  dot: string;
};

const layers: Layer[] = [
  { id: "rgb", label: "Gerçek renk", code: "RGB / TCI", hint: "Doğal renk uydu görüntüsü.", src: "/showcase/ankara-rgb.png", icon: Satellite, dot: "#94a3b8" },
  { id: "termal", label: "Termal", code: "LST", hint: "Yüzey sıcaklığı görselleştirmesi.", src: "/showcase/ankara-termal.png", icon: Thermometer, dot: "#b58457" },
  { id: "su", label: "Su", code: "NDWI", hint: "Su kaynakları ve nem indeksi.", src: "/showcase/ankara-su.png", icon: Droplets, dot: "#5b86b0" },
  { id: "tarim", label: "Tarım", code: "NDVI", hint: "Bitki örtüsü yoğunluğu.", src: "/showcase/ankara-tarim.png", icon: Sprout, dot: "#6f9e7e" },
  { id: "yapi", label: "Yapılaşma", code: "NDBI", hint: "Kentsel doku çıkarımı.", src: "/showcase/ankara-yapi.png", icon: Building2, dot: "#b06a6a" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LayerExplorer() {
  const [active, setActive] = useState<Layer>(layers[0]);

  return (
    <section id="katmanlar" className="relative overflow-hidden bg-[#05070d] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">// veri katmanları</p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Tek pas, beş analiz katmanı
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
            Aynı uydu geçişinden türetilen katmanlar — gerçek renkten termal, su, tarım ve yapılaşma çıkarımına kadar.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* görüntü */}
          <div className="relative overflow-hidden rounded-md border border-zinc-800 bg-[#070a13] p-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-square lg:aspect-[5/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.02 }}
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
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                <span>Ankara · 39.94N 32.86E</span>
                <span className="text-zinc-400">{active.code}</span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-8">
                <p className="font-[family-name:var(--font-inter)] text-base font-bold text-zinc-100">{active.label}</p>
                <p className="mt-0.5 text-xs text-zinc-400">{active.hint}</p>
              </div>
            </div>
          </div>

          {/* seçici */}
          <div className="flex flex-col gap-2">
            {layers.map((layer) => {
              const isActive = layer.id === active.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActive(layer)}
                  aria-pressed={isActive}
                  className={`group flex items-center gap-4 rounded-sm border p-4 text-left transition-colors ${
                    isActive
                      ? "border-zinc-600 bg-white/[0.04]"
                      : "border-zinc-800 bg-transparent hover:border-zinc-700 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-zinc-800 bg-white/[0.02] text-zinc-400">
                    <layer.icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: layer.dot }} aria-hidden />
                      <span className="font-[family-name:var(--font-inter)] text-sm font-semibold text-zinc-200">{layer.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">{layer.code}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-zinc-500">{layer.hint}</span>
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
