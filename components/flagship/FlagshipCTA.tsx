"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

export default function FlagshipCTA() {
  const panel = getPanelLink();
  const openDemo = useOpenDemo();

  return (
    <section id="erisim" className="relative py-28 sm:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600"
        >
          // erişim
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-tight tracking-tight text-zinc-100 sm:text-6xl"
        >
          Yörüngeden başlayın
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-zinc-500"
        >
          Kurumsal panele erişin ya da kuruluşunuza özel bir demo planlayalım. Kapsam ve koşullar yazılı netleştirilir.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={panel.href}
            target={panel.openInNewTab ? "_blank" : undefined}
            rel={panel.openInNewTab ? "noopener noreferrer" : undefined}
            className="group inline-flex items-center gap-2 rounded-sm border border-zinc-700 bg-zinc-100 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:bg-white"
          >
            Panele giriş
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 bg-transparent px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
          >
            Demo talebi
          </button>
        </motion.div>
        <p className="mt-6 font-mono text-[11px] text-zinc-700">iletisim@oncuintelligence.com</p>
      </div>
    </section>
  );
}
