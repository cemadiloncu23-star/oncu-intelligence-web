"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, MapPin, Calendar, Satellite, Thermometer, Droplets, Sprout, Building2 } from "lucide-react";

type Layer = {
  id: string;
  label: string;
  hint: string;
  src: string;
  icon: typeof Satellite;
  dot: string;
};

const layers: Layer[] = [
  {
    id: "rgb",
    label: "Gerçek renk",
    hint: "Doğal renk uydu görüntüsü — arazi, yapı ve doku.",
    src: "/showcase/ankara-rgb.png",
    icon: Satellite,
    dot: "bg-[#15803D]",
  },
  {
    id: "termal",
    label: "Termal",
    hint: "Yüzey sıcaklığı ve termal farkların görselleştirilmesi.",
    src: "/showcase/ankara-termal.png",
    icon: Thermometer,
    dot: "bg-[#EA580C]",
  },
  {
    id: "su",
    label: "Su (NDWI)",
    hint: "Su kaynakları ve nem tespiti indeksi.",
    src: "/showcase/ankara-su.png",
    icon: Droplets,
    dot: "bg-[#0E7490]",
  },
  {
    id: "tarim",
    label: "Tarım (NDVI)",
    hint: "Bitki örtüsü yoğunluğu ve tarımsal alan tespiti.",
    src: "/showcase/ankara-tarim.png",
    icon: Sprout,
    dot: "bg-[#16A34A]",
  },
  {
    id: "yapi",
    label: "Yapılaşma",
    hint: "Kentsel doku ve yapılaşma alanlarının çıkarımı.",
    src: "/showcase/ankara-yapi.png",
    icon: Building2,
    dot: "bg-[#B91C1C]",
  },
];

export default function SatelliteShowcaseSection() {
  const [active, setActive] = useState<Layer>(layers[0]);

  return (
    <section id="uydu-gorseller" className="scroll-mt-20 border-y border-[#E2E8F0] bg-white py-24 dark:border-border dark:bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803D] dark:text-emerald-400">
            <Layers className="h-3.5 w-3.5" aria-hidden />
            Uydu analiz katmanları
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Tek bir lokasyon, beş analiz katmanı
          </h2>
          <p className="text-pretty leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Aynı uydu pasından üretilen farklı katmanlar; gerçek renkten termal, su, tarım ve yapılaşma çıkarımına kadar.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Görüntü */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#0F172A] shadow-[0_24px_48px_rgba(15,23,42,0.18)] dark:border-border">
            <div className="relative aspect-square w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={`Ankara — ${active.label} uydu analiz katmanı`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover"
                    priority={active.id === "rgb"}
                  />
                </motion.div>
              </AnimatePresence>

              {/* üst bilgi şeridi */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-2 bg-gradient-to-b from-black/55 to-transparent p-4 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  Ankara · 39.94, 32.86
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  18 Oca 2026
                </span>
              </div>

              {/* alt katman etiketi */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                <div className="flex items-center gap-2 text-white">
                  <span className={`h-2.5 w-2.5 rounded-full ${active.dot}`} aria-hidden />
                  <span className="text-sm font-bold">{active.label}</span>
                </div>
                <p className="mt-0.5 text-xs text-white/80">{active.hint}</p>
              </div>
            </div>
          </div>

          {/* Katman seçici */}
          <div className="space-y-2.5">
            {layers.map((layer) => {
              const isActive = layer.id === active.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActive(layer)}
                  aria-pressed={isActive}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-[#15803D]/40 bg-[#F0FDF4] shadow-[0_8px_24px_rgba(21,128,61,0.12)] dark:border-emerald-500/40 dark:bg-emerald-950/30"
                      : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#15803D]/25 hover:bg-white dark:border-border dark:bg-muted/30 dark:hover:border-emerald-500/25"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      isActive
                        ? "border-[#15803D]/30 bg-white text-[#15803D] dark:border-emerald-500/30 dark:bg-card dark:text-emerald-400"
                        : "border-[#E2E8F0] bg-white text-[#64748B] dark:border-border dark:bg-card dark:text-muted-foreground"
                    }`}
                  >
                    <layer.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-[#0F172A] dark:text-foreground">{layer.label}</span>
                    <span className="block truncate text-xs text-[#64748B] dark:text-muted-foreground">{layer.hint}</span>
                  </span>
                </button>
              );
            })}
            <p className="px-1 pt-2 text-[11px] leading-relaxed text-[#94A3B8] dark:text-muted-foreground">
              Görseller platform tarafından üretilmiş örnek analiz çıktılarıdır (Sentinel uydu verisi temelli).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
