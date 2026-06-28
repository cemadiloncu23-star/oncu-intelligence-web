"use client";

import { motion } from "framer-motion";
import { Briefcase, Factory, LineChart } from "lucide-react";

const segments = [
  {
    title: "Sanayi",
    icon: Factory,
    color: "from-[#15803D]/15 to-[#0E7490]/10 border-[#15803D]/25 dark:from-emerald-500/10 dark:to-cyan-500/10 dark:border-emerald-500/25",
    iconColor: "text-[#15803D] dark:text-emerald-400",
    body: "Hat ve tesis bazlı tüketim, verimlilik metrikleri ve denetim çıktıları için tek panel.",
    points: ["Tesis & hat kırılımı", "ISO 50001 uyumlu çıktı", "Sektör kıyası"],
  },
  {
    title: "ESCO",
    icon: LineChart,
    color: "from-[#4338CA]/10 to-[#7C3AED]/10 border-[#4338CA]/25 dark:from-indigo-500/10 dark:to-violet-500/10 dark:border-indigo-500/25",
    iconColor: "text-[#4338CA] dark:text-indigo-400",
    body: "Portföy müşterilerinde standart rapor, şeffaf iş akışı ve müşteri ile paylaşılabilir özetler.",
    points: ["Çoklu müşteri portföyü", "Standart rapor şablonu", "Paylaşılabilir özet"],
  },
  {
    title: "Danışmanlık",
    icon: Briefcase,
    color: "from-[#EA580C]/10 to-[#D97706]/10 border-[#EA580C]/25 dark:from-orange-500/10 dark:to-amber-500/10 dark:border-orange-500/25",
    iconColor: "text-[#EA580C] dark:text-orange-400",
    body: "Projeye uygun şablonlar, uydu destekli konum özeti ve sunuma hazır PDF üretimi.",
    points: ["Projeye özel şablon", "Uydu konum özeti", "Sunuma hazır PDF"],
  },
];

export default function AudienceSegmentsSection() {
  return (
    <section id="kim-icin" className="scroll-mt-20 bg-[#F1F5F9] py-24 dark:bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4338CA] dark:text-indigo-300">
            Kimler için
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Ekibinizin rolüne göre tasarlandı
          </h2>
          <p className="mx-auto max-w-xl text-pretty leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Kurumsal enerji ve sürdürülebilirlik ekiplerinin günlük akışına uyan modüller; tümü tek panelde birleşir.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col rounded-2xl border bg-gradient-to-br p-8 transition-transform hover:-translate-y-1 ${seg.color}`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white/90 shadow-sm dark:border-border dark:bg-card">
                <seg.icon className={`h-6 w-6 ${seg.iconColor}`} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0F172A] dark:text-foreground">{seg.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-[#475569] dark:text-muted-foreground">{seg.body}</p>
              <ul className="mt-auto space-y-2 border-t border-black/5 pt-4 dark:border-white/10">
                {seg.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-[13px] font-medium text-[#334155] dark:text-slate-300">
                    <span className={`h-1.5 w-1.5 rounded-full ${seg.iconColor.replace("text-", "bg-")}`} aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
