"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";

export const IMG = {
  hero: "/images/satellite/hero-earth-orbit.jpg", // Sentinel-2 L2A, Konya ovası, 2 Eyl 2026
  ges: "/images/satellite/ges-nadir.jpg", // Sentinel-2 L2A, Karapınar GES bölgesi, 20 Ağu 2026
  res: "/images/satellite/res-terrain.jpg", // Sentinel-2 L2A, Bozcaada (rüzgar santrali adası), 21 Eyl 2026
  thermal: "/showcase/ankara-termal.png",
  veg: "/showcase/ankara-tarim.png",
  hes: "/images/satellite/hes-reservoir.jpg", // Sentinel-2 L2A, Atatürk Barajı, 4 Ağu 2026
  infra: "/images/satellite/pipeline-corridor.jpg", // Sentinel-2 L2A, Ceyhan enerji terminali (tank sahası ve iskeleler), 23 Eki 2026
};

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Koyu jeodezik renk derecelemesi uygulanmış uydu görüntüsü (yüklenemezse lacivert degrade kalır). */
export function Sat({ src, className = "", zoom = false, overlay = 0.55, pos = "center" }: { src: string; className?: string; zoom?: boolean; overlay?: number; pos?: string }) {
  const [bad, setBad] = useState(false);
  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0B172E] to-[#030712] ${className}`} aria-hidden>
      {!bad && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setBad(true)}
          style={{ objectPosition: pos }}
          className={`h-full w-full object-cover contrast-110 saturate-90 transition-transform duration-[1400ms] ease-out ${zoom ? "group-hover:scale-110" : ""}`}
        />
      )}
      <div className="absolute inset-0" style={{ background: `rgba(3,7,18,${overlay})` }} />
    </div>
  );
}

/** Fareyi izleyen ince spotlight'lı kart. */
export function SpotCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(360px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.07), transparent 60%)" }}
      />
      {children}
    </div>
  );
}

export const mono = "font-[family-name:var(--font-jetbrains)]";
export const display = "font-[family-name:var(--font-space-grotesk)]";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-[#3B82F6]`}>{children}</p>;
}

export function Crosshairs() {
  const c = "absolute h-3 w-3 text-white/25";
  return (
    <>
      {["left-4 top-4", "right-4 top-4", "left-4 bottom-4", "right-4 bottom-4"].map((p) => (
        <svg key={p} className={`${c} ${p}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M6 0v12M0 6h12" />
        </svg>
      ))}
    </>
  );
}
