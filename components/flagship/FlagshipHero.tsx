"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FlagshipHero() {
  return (
    <section id="tepe" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#070a13]">
      {/* === Arka plan: yörüngeden uydu fotoğrafı (metnin arkasına gömülü) === */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/showcase/ankara-rgb.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover opacity-[0.7]"
        />

        {/* okunabilirlik scrim'leri — soldan ve alttan koyu, sağ-üstte foto görünür */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-[#070a13]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-[#070a13]/15 to-[#070a13]/55" />
        {/* nav okunabilirliği için üst hafif karartma */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#070a13]/80 to-transparent" />
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
              Enerji yatırım ve takip platformları
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease }}
            className="font-[family-name:var(--font-inter)] text-[2.7rem] font-extrabold leading-[1.05] tracking-tight text-zinc-100 [text-wrap:balance] sm:text-6xl lg:text-[4.4rem]"
          >
            Doğru yatırım
            <br />
            <span className="text-zinc-400">gökyüzünden başlar</span>
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
