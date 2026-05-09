"use client";

import { motion } from "framer-motion";
import { Briefcase, Factory, LineChart } from "lucide-react";

const segments = [
  {
    title: "Sanayi",
    icon: Factory,
    color: "from-[#15803D]/15 to-[#0E7490]/10 border-[#15803D]/25",
    iconColor: "text-[#15803D]",
    body: "Hat ve tesis bazlı tüketim, verimlilik metrikleri ve denetim çıktıları için tek panel.",
  },
  {
    title: "ESCO",
    icon: LineChart,
    color: "from-[#4338CA]/10 to-[#7C3AED]/10 border-[#4338CA]/25",
    iconColor: "text-[#4338CA]",
    body: "Portföy müşterilerinde standart rapor, şeffaf iş akışı ve müşteri ile paylaşılabilir özetler.",
  },
  {
    title: "Danışmanlık",
    icon: Briefcase,
    color: "from-[#EA580C]/10 to-[#D97706]/10 border-[#EA580C]/25",
    iconColor: "text-[#EA580C]",
    body: "Projeye uygun şablonlar, uydu destekli konum özeti ve sunuma hazır PDF üretimi.",
  },
];

export default function AudienceSegmentsSection() {
  return (
    <section id="kim-icin" className="py-24 bg-[#F1F5F9] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">Kimler için?</h2>
          <p className="text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Kurumsal enerji ve sürdürülebilirlik ekiplerine göre modüller; SolarMind panel yapısıyla uyumlu mesaj.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border bg-gradient-to-br p-8 ${seg.color}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/90 border border-[#E2E8F0] flex items-center justify-center mb-4 shadow-sm`}>
                <seg.icon className={`w-6 h-6 ${seg.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{seg.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{seg.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
