"use client";

import { motion } from "framer-motion";
import { Check, Sprout, Sun } from "lucide-react";

const steps = [
  {
    title: "Enerji analizi & kurumsal panel",
    status: "active" as const,
    desc: "Verimlilik merkezi, üretim analizi, alarmlar, ÖNCÜ Zeka ve uydu temelli raporlar — KutGöz ile uyumlu.",
    icon: Sun,
  },
  {
    title: "Tarım analizi",
    status: "soon" as const,
    desc: "Tarım modülü üzerinde çalışmalar devam ediyor; yakında hizmetinizde.",
    icon: Sprout,
  },
];

export default function RoadmapSection() {
  return (
    <section id="yol-haritasi" className="relative scroll-mt-20 overflow-hidden bg-white py-24 dark:bg-card">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-[#15803D]/5 blur-[100px] dark:bg-emerald-500/10" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803D] dark:text-emerald-400">
            Yol haritası
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Ürünü adım adım genişletiyoruz
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Şu an enerji ve kurumsal panel aktif; tarım analizi yolda.
          </p>
        </motion.div>

        <div className="relative space-y-6 pl-2">
          {/* dikey çizgi */}
          <div
            className="absolute bottom-6 left-[1.6rem] top-6 w-px bg-gradient-to-b from-[#15803D]/40 via-[#E2E8F0] to-transparent dark:via-border"
            aria-hidden
          />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex gap-6 rounded-2xl border p-6 ${
                step.status === "active"
                  ? "border-[#15803D]/35 bg-[#F8FAFC] shadow-[0_8px_30px_rgba(21,128,61,0.08)] dark:border-emerald-500/30 dark:bg-muted/40"
                  : "border-[#E2E8F0] bg-[#FAFAFA] dark:border-border dark:bg-muted/20"
              }`}
            >
              <div
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  step.status === "active"
                    ? "bg-[#15803D] text-white dark:text-primary-foreground"
                    : "bg-[#F1F5F9] text-[#94A3B8] dark:bg-muted dark:text-muted-foreground"
                }`}
              >
                {step.status === "active" ? <Check className="h-6 w-6" /> : <step.icon className="h-6 w-6" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-foreground">{step.title}</h3>
                  {step.status === "active" && (
                    <span className="rounded-full border border-[#15803D]/20 bg-[#DCFCE7] px-2 py-0.5 text-xs font-bold text-[#166534] dark:border-emerald-500/30 dark:bg-emerald-950/50 dark:text-emerald-300">
                      Aktif
                    </span>
                  )}
                  {step.status === "soon" && (
                    <span className="rounded-full border border-[#EA580C]/20 bg-[#FFEDD5] px-2 py-0.5 text-xs font-bold text-[#C2410C] dark:border-orange-500/30 dark:bg-orange-950/40 dark:text-orange-300">
                      Yakında
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
