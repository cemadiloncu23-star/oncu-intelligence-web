"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Satellite,
  FileText,
  BellRing,
  Sparkles,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: Gauge,
    title: "Verimlilik & üretim akışı",
    desc: "Tek panelden tüketim görünümü ve üretim analizi süreçleri.",
  },
  {
    icon: Satellite,
    title: "Uydu katmanları",
    desc: "Konum özetinde uydu görüntüleri ve rapor pipeline'ı.",
  },
  {
    icon: FileText,
    title: "Kurumsal raporlama",
    desc: "PDF şablonları ve denetim izi odaklı çıktılar.",
  },
  {
    icon: BellRing,
    title: "Alarm merkezi",
    desc: "Eşik ve kural bazlı bildirimler, önceliklendirme.",
  },
  {
    icon: Sparkles,
    title: "ÖNCÜ Zeka",
    desc: "Kuruluş verinize bağlamda sohbet ve içgörü.",
  },
  {
    icon: Users,
    title: "Rol bazlı erişim",
    desc: "Kurumsal RBAC ve çoklu tesis senaryosu.",
  },
];

export default function ComparisonSection() {
  return (
    <section id="karsilastirma" className="scroll-mt-20 bg-[#F8FAFC] py-24 dark:bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4338CA] dark:text-indigo-300">
            Özellik özeti
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Tek panelde uçtan uca yetkinlik
          </h2>
          <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Sahadan rapora kadar ihtiyaç duyduğunuz modüller. Gerçekleşen kapsam kurulumunuza ve sözleşmeye göre netleşir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#15803D]/25 hover:shadow-lg dark:border-border dark:bg-card dark:hover:border-emerald-500/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15803D]/20 bg-[#15803D]/[0.06] text-[#15803D] dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400">
                <c.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="mb-1 font-bold text-[#0F172A] dark:text-foreground">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
