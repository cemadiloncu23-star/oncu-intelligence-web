"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Thermometer, Droplets, Sprout, Building2, MoveHorizontal } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealLayer = {
  id: string;
  label: string;
  code: string;
  src: string;
  icon: typeof Thermometer;
};

const reveals: RevealLayer[] = [
  { id: "yapi", label: "Yapılaşma", code: "NDBI", src: "/showcase/ankara-yapi.png", icon: Building2 },
  { id: "termal", label: "Termal", code: "LST", src: "/showcase/ankara-termal.png", icon: Thermometer },
  { id: "su", label: "Su", code: "NDWI", src: "/showcase/ankara-su.png", icon: Droplets },
  { id: "tarim", label: "Tarım", code: "NDVI", src: "/showcase/ankara-tarim.png", icon: Sprout },
];

export default function LiveDashboard() {
  const [active, setActive] = useState<RevealLayer>(reveals[0]);
  const [pos, setPos] = useState(55);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section id="canli-veri" className="relative overflow-hidden bg-[#05070d] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">// karşılaştırma</p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Ham görüntüden analize, tek karede
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
            Çizgiyi sürükleyin: solda işlenmiş ham uydu görüntüsü, sağda aynı kareden türetilen yapay zekâ çıkarımı.
          </p>
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
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              Ankara · 39.94N 32.86E
            </span>
          </div>

          {/* karşılaştırma çerçevesi */}
          <div
            ref={frameRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-[#070a13]"
          >
            {/* alt katman — ham RGB */}
            <Image
              src="/showcase/ankara-rgb.png"
              alt="Ham uydu görüntüsü (gerçek renk)"
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover"
              priority={false}
            />

            {/* üst katman — analiz çıkarımı, soldan kırpılır */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Image
                key={active.id}
                src={active.src}
                alt={`${active.label} analiz katmanı`}
                fill
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover"
              />
            </div>

            {/* etiketler */}
            <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-black/55 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-200 backdrop-blur-sm">
              {active.label} · {active.code}
            </span>
            <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-black/55 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
              RGB · ham görüntü
            </span>

            {/* ayraç çizgisi + tutamaç */}
            <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 -left-px w-px bg-white/70" />
              <div className="absolute top-1/2 left-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/60 text-white backdrop-blur-sm">
                <MoveHorizontal className="h-4 w-4" aria-hidden />
              </div>
            </div>
          </div>

          {/* alt bar — katman seçici + erişilebilir kaydırıcı */}
          <div className="flex flex-col gap-4 border-t border-zinc-800 bg-[#0a0d16] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {reveals.map((r) => {
                const isActive = r.id === active.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActive(r)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      isActive
                        ? "border-zinc-500 bg-white/[0.06] text-zinc-100"
                        : "border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                    }`}
                  >
                    <r.icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                    {r.label}
                  </button>
                );
              })}
            </div>

            <label className="flex items-center gap-3 sm:w-64">
              <span className="sr-only">Karşılaştırma konumu</span>
              <input
                type="range"
                min={0}
                max={100}
                value={Math.round(pos)}
                onChange={(e) => setPos(Number(e.target.value))}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-zinc-700 accent-zinc-200"
                aria-label="Karşılaştırma konumu"
              />
            </label>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
