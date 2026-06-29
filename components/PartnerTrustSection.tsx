"use client";

import { motion } from "framer-motion";
import { Gauge, Satellite, FileCheck2, Bell } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    title: "Tesis bazlı verimlilik",
    desc: "Tüketim trendleri, ekipman kırılımı ve sektör kıyası tek panoda.",
    accent: "text-[#15803D] dark:text-emerald-400",
    ring: "border-[#15803D]/20 bg-[#15803D]/[0.06] dark:border-emerald-500/25 dark:bg-emerald-500/10",
  },
  {
    icon: Satellite,
    title: "Uydu destekli analiz",
    desc: "Güneş, rüzgâr, hidro ve madencilik potansiyeli için konum bazlı katmanlar.",
    accent: "text-[#0E7490] dark:text-cyan-400",
    ring: "border-[#0E7490]/20 bg-[#0E7490]/[0.06] dark:border-cyan-500/25 dark:bg-cyan-500/10",
  },
  {
    icon: FileCheck2,
    title: "Denetime hazır rapor",
    desc: "ISO 50001 / EVD odaklı PDF şablonları ve versiyonlanmış denetim izi.",
    accent: "text-[#4338CA] dark:text-indigo-400",
    ring: "border-[#4338CA]/20 bg-[#4338CA]/[0.06] dark:border-indigo-500/25 dark:bg-indigo-500/10",
  },
  {
    icon: Bell,
    title: "7/24 alarm & izleme",
    desc: "Eşik ve kural bazlı bildirimler; rol bazlı önceliklendirme.",
    accent: "text-[#B45309] dark:text-amber-400",
    ring: "border-[#B45309]/20 bg-[#B45309]/[0.06] dark:border-amber-500/25 dark:bg-amber-500/10",
  },
];

const segments = ["Sanayi", "ESCO", "Danışmanlık", "Enerji hizmetleri"];

export default function PartnerTrustSection() {
  return (
    <section
      id="guven"
      className="scroll-mt-20 border-y border-[#E2E8F0] bg-white py-20 dark:border-border dark:bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4338CA] dark:text-indigo-300">
            Neden Satenergy
          </p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-3xl">
            Tek panelde verimlilik, üretim analizi ve denetim
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Kurumsal enerji ekiplerinin sahadan rapora kadar ihtiyaç duyduğu dört yetkinlik,
            KutGöz ürün ailesiyle aynı altyapıda birleşir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-all hover:-translate-y-0.5 hover:border-[#15803D]/25 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-border dark:bg-muted/30 dark:hover:border-emerald-500/30"
            >
              <span
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${p.ring} ${p.accent}`}
              >
                <p.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mb-1.5 font-bold text-[#0F172A] dark:text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-dashed border-[#E2E8F0] pt-8 dark:border-border sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] dark:text-muted-foreground">
              Kimler için
            </span>
            {segments.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold text-[#475569] dark:border-border dark:bg-card dark:text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="max-w-md text-center text-xs leading-relaxed text-[#94A3B8] dark:text-muted-foreground sm:text-right">
            Müşteri logoları ve referanslar yalnızca yazılı izinle yayımlanır; bu vitrin genel ürün tanımı içerir.
          </p>
        </div>
      </div>
    </section>
  );
}
