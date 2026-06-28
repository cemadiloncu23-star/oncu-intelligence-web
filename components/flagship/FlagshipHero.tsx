"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

const ease = [0.22, 1, 0.36, 1] as const;

const telemetry = [
  { k: "LAT", v: "39.9416" },
  { k: "LON", v: "32.8647" },
  { k: "RES", v: "10m / px" },
  { k: "BANT", v: "12" },
];

export default function FlagshipHero() {
  const panel = getPanelLink();
  const openDemo = useOpenDemo();

  return (
    <section id="tepe" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#070a13] pt-16">
      {/* arka plan katmanları */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {/* mavi atmosfer parıltısı */}
        <div
          className="absolute -right-[10%] top-[-20%] h-[60rem] w-[60rem] rounded-full opacity-50 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(56,189,248,0.10) 40%, transparent 70%)" }}
        />
        <div
          className="absolute -left-[15%] bottom-[-25%] h-[45rem] w-[45rem] rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)" }}
        />
        {/* yıldız alanı */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 50%, transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.6) 50%, transparent), radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,0.7) 50%, transparent), radial-gradient(1px 1px at 85% 20%, rgba(255,255,255,0.5) 50%, transparent), radial-gradient(1px 1px at 55% 12%, rgba(255,255,255,0.55) 50%, transparent)",
            backgroundSize: "520px 520px, 360px 360px, 600px 600px, 300px 300px, 480px 480px",
          }}
        />
        {/* ince grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />
        {/* yörünge yayı */}
        <svg className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-30" viewBox="0 0 1000 1000" fill="none" aria-hidden>
          <ellipse cx="500" cy="500" rx="460" ry="300" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="2 16" transform="rotate(-12 500 500)" />
        </svg>
        {/* alt fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#070a13]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Sol — metin */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300">
              Canlı uydu istihbaratı
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="font-[family-name:var(--font-inter)] text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Dünyayı yörüngeden
            <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#60a5fa] to-[#2563EB] bg-clip-text text-transparent">
              veriye dönüştürün
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-400 sm:text-base"
          >
            Sentinel uydu verisini enerji, su, tarım ve yapılaşma katmanlarına dönüştüren kurumsal istihbarat platformu.
            Tek panelden analiz, izleme ve denetime hazır rapor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={panel.href}
              target={panel.openInNewTab ? "_blank" : undefined}
              rel={panel.openInNewTab ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(56,189,248,0.3),0_16px_40px_-12px_rgba(37,99,235,0.8)] transition-all hover:bg-[#1d4ed8]"
            >
              Panele giriş
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden />
              Demo talebi
            </button>
          </motion.div>

          {/* telemetri şeridi */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid max-w-md grid-cols-4 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] font-mono"
          >
            {telemetry.map((t) => (
              <div key={t.k} className="flex flex-col gap-1 bg-[#070a13]/40 px-3 py-3">
                <dt className="text-[9px] uppercase tracking-[0.18em] text-slate-500">{t.k}</dt>
                <dd className="text-[13px] font-medium text-[#38BDF8]">{t.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Sağ — canlı kaptı paneli */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(15,23,42,0.6)] p-2.5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
            {/* başlık çubuğu */}
            <div className="mb-2.5 flex items-center justify-between px-2 pt-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                CAPTURE · SENTINEL-2
              </span>
              <span>18.01.2026</span>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/showcase/ankara-rgb.png"
                alt="Canlı uydu görüntüsü — Ankara"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
                priority
              />
              {/* köşe braketleri */}
              {[
                "left-3 top-3 border-l-2 border-t-2",
                "right-3 top-3 border-r-2 border-t-2",
                "left-3 bottom-3 border-l-2 border-b-2",
                "right-3 bottom-3 border-r-2 border-b-2",
              ].map((pos) => (
                <span key={pos} className={`absolute h-5 w-5 border-[#38BDF8]/70 ${pos}`} aria-hidden />
              ))}
              {/* tarama çizgisi */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                animate={{ top: ["8%", "92%", "8%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* alt koordinat */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-3 pb-2.5 pt-6 font-mono text-[10px] text-slate-200">
                <span>39.9416°N 32.8647°E</span>
                <span className="text-[#38BDF8]">● TRACKING</span>
              </div>
            </div>
          </div>
          {/* alt yansıyan parıltı */}
          <div className="absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-[#2563EB]/30 blur-2xl" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
