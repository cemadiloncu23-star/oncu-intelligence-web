"use client";

import { motion } from "framer-motion";
import { Check, Sprout, Sun } from "lucide-react";

const steps = [
  {
    title: "Enerji analizi & kurumsal panel",
    status: "active" as const,
    desc: "Verimlilik merkezi, üretim analizi, alarmlar, ÖNCÜ Zeka ve uydu temelli raporlar — SolarMind ile uyumlu.",
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
    <section id="yol-haritasi" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#15803D]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">Yol haritamız</h2>
          <p className="text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Ürünü adım adım genişletiyoruz. Şu an enerji ve kurumsal panel aktif; tarım analizi yolda.
          </p>
        </motion.div>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-6 p-6 rounded-2xl border ${
                step.status === "active"
                  ? "bg-[#F8FAFC] border-[#15803D]/35 shadow-[0_8px_30px_rgba(21,128,61,0.08)]"
                  : "bg-[#FAFAFA] border-[#E2E8F0]"
              }`}
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  step.status === "active" ? "bg-[#15803D] text-white" : "bg-[#F1F5F9] text-[#94A3B8]"
                }`}
              >
                {step.status === "active" ? <Check className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">{step.title}</h3>
                  {step.status === "active" && (
                    <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] text-xs font-bold border border-[#15803D]/20">
                      Aktif
                    </span>
                  )}
                  {step.status === "soon" && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FFEDD5] text-[#C2410C] text-xs font-bold border border-[#EA580C]/20">
                      Yakında
                    </span>
                  )}
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
