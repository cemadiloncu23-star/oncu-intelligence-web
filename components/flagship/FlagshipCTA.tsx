"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

export default function FlagshipCTA() {
  const panel = getPanelLink();
  const openDemo = useOpenDemo();

  return (
    <section id="erisim" className="relative scroll-mt-16 overflow-hidden bg-[#070a13] py-32">
      {/* yörünge ufku parıltısı */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0" aria-hidden>
        <div className="mx-auto h-[26rem] w-[60rem] max-w-[120%] translate-y-1/2 rounded-[50%] bg-[#2563EB]/25 blur-[120px]" />
        <div className="mx-auto -mt-40 h-px w-[80%] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[#38BDF8]"
        >
          // erişim
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-inter)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl"
        >
          Yörüngeden başlayın
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-slate-400"
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
            className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(56,189,248,0.3),0_20px_50px_-12px_rgba(37,99,235,0.9)] transition-all hover:bg-[#1d4ed8]"
          >
            Panele giriş
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            Demo talebi
          </button>
        </motion.div>
        <p className="mt-6 font-mono text-[11px] text-slate-600">
          iletisim@oncuintelligence.com
        </p>
      </div>
    </section>
  );
}
