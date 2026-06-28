"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FlagshipHero() {
  return (
    <section id="tepe" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#070a13]">
      {/* === Arka plan: yörüngeden uydu görüntüsü (çok koyu, nötr) === */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/showcase/ankara-rgb.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover opacity-[0.18] grayscale"
        />

        {/* çok hafif, durağan atmosfer derinliği (neon yok) */}
        <div
          className="absolute -right-[18%] top-[-20%] h-[55rem] w-[55rem] rounded-full opacity-60 blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(51,65,85,0.30) 0%, transparent 70%)" }}
        />

        {/* ince yıldız alanı (düşük yoğunluk) */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 18% 28%, rgba(255,255,255,0.55) 50%, transparent), radial-gradient(1px 1px at 72% 62%, rgba(255,255,255,0.4) 50%, transparent), radial-gradient(1px 1px at 42% 82%, rgba(255,255,255,0.45) 50%, transparent), radial-gradient(1px 1px at 88% 18%, rgba(255,255,255,0.35) 50%, transparent)",
            backgroundSize: "560px 560px, 400px 400px, 620px 620px, 340px 340px",
          }}
        />

        {/* okunabilirlik / kontrast düşürme katmanları */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-[#070a13]/90 to-[#070a13]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a13]/60 via-transparent to-[#070a13]" />
      </div>

      {/* === İçerik === */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-7 inline-flex items-center gap-2.5 border-l border-zinc-700 pl-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              Uydu istihbarat platformu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease }}
            className="font-[family-name:var(--font-inter)] text-[2.7rem] font-extrabold leading-[1.05] tracking-tight text-zinc-100 [text-wrap:balance] sm:text-6xl lg:text-[4.4rem]"
          >
            Yeryüzünün Verisini
            <br />
            <span className="text-zinc-400">İstihbarata Dönüştürün</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-base"
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
              className="group inline-flex items-center gap-2.5 rounded-sm border border-zinc-700 bg-zinc-100 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-zinc-900 transition-colors duration-300 hover:bg-white"
            >
              Platformu Keşfedin
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
          </motion.div>
        </div>
      </div>

      {/* alt köşe — kaynak künyesi (mono, çok hafif) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
          Capture · Sentinel-2 · 39.94°N 32.86°E
        </p>
      </div>
    </section>
  );
}
