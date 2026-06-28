"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FlagshipHero() {
  return (
    <section id="tepe" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#070a13]">
      {/* === Arka plan: yörüngeden uydu görüntüsü (çok koyu) === */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {/* yüksek çözünürlüklü uydu görüntüsü — luminosity + düşük opaklık */}
        <Image
          src="/showcase/ankara-rgb.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover opacity-30 mix-blend-luminosity"
        />

        {/* döngüsel yörünge / atmosfer parıltısı (hafif, yavaş) */}
        <motion.div
          className="absolute -right-[12%] top-[-15%] h-[55rem] w-[55rem] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.30) 0%, rgba(56,189,248,0.10) 45%, transparent 72%)" }}
          animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-[14%] bottom-[-22%] h-[40rem] w-[40rem] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)" }}
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ince yıldız alanı */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 18% 28%, rgba(255,255,255,0.8) 50%, transparent), radial-gradient(1px 1px at 72% 62%, rgba(255,255,255,0.55) 50%, transparent), radial-gradient(1.5px 1.5px at 42% 82%, rgba(255,255,255,0.65) 50%, transparent), radial-gradient(1px 1px at 88% 18%, rgba(255,255,255,0.5) 50%, transparent)",
            backgroundSize: "520px 520px, 380px 380px, 600px 600px, 320px 320px",
          }}
        />

        {/* === Okunabilirlik için karartma katmanları === */}
        {/* soldan sağa koyu degrade (metin tarafı koyu) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-[#070a13]/85 to-[#070a13]/40" />
        {/* dikey fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a13]/70 via-transparent to-[#070a13]" />
      </div>

      {/* === İçerik === */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-300">
              Uydu istihbarat platformu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease }}
            className="font-[family-name:var(--font-inter)] text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-white [text-wrap:balance] sm:text-6xl lg:text-[4.4rem]"
          >
            Yeryüzünün Verisini
            <br />
            <span className="bg-gradient-to-r from-white via-[#bfdbfe] to-[#38BDF8] bg-clip-text text-transparent">
              İstihbarata Dönüştürün
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[17px]"
          >
            oncuintelligence.com, yüksek çözünürlüklü uydu görüntülerini yapay zeka algoritmalarıyla işleyerek
            piksel altı analizler ve anlık değişim takibi sağlar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease }}
            className="mt-10"
          >
            <a
              href="#yetenekler"
              className="group inline-flex items-center gap-2.5 rounded-md bg-[#2563EB] px-7 py-4 text-sm font-semibold tracking-tight text-white ring-1 ring-inset ring-[#60a5fa]/30 transition-[box-shadow,background-color] duration-300 hover:bg-[#2f6df0] hover:shadow-[0_0_28px_-4px_rgba(56,189,248,0.65)]"
            >
              Platformu Keşfedin
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
          </motion.div>
        </div>
      </div>

      {/* alt köşe — kaynak künyesi (mono, çok hafif) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
          Capture · Sentinel-2 · 39.94°N 32.86°E
        </p>
      </div>
    </section>
  );
}
