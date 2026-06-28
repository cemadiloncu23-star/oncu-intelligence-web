"use client";

import { motion } from "framer-motion";
import { Mail, UserPlus, MapPin, FileBarChart } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Erişim talep et",
    desc: "E-posta ile iletisim@oncuintelligence.com adresine demo veya erişim talebinizi iletin.",
    icon: Mail,
  },
  {
    step: 2,
    title: "Hesap aç",
    desc: "Talebiniz değerlendirilir; size hesap bilgileri ve giriş linki iletilecektir.",
    icon: UserPlus,
  },
  {
    step: 3,
    title: "Alan ekle",
    desc: "Panel üzerinden kayıtlı alanlarınızı ekleyin; en fazla üç alan seçebilirsiniz.",
    icon: MapPin,
  },
  {
    step: 4,
    title: "Analiz çalıştır",
    desc: "Güneş, rüzgar, hidroelektrik veya madencilik analizini başlatın; PDF rapor hazırlanır.",
    icon: FileBarChart,
  },
];

export default function HowToStartSection() {
  return (
    <section id="nasil-baslar" className="relative scroll-mt-20 bg-[#F8FAFC] py-24 dark:bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803D] dark:text-emerald-400">
            Başlangıç
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Dört adımda canlıya geçin
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Erişim talebinden ilk raporunuza kadar süreç sade ve hızlı.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* timeline çizgisi (lg) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[1.85rem] hidden h-px bg-gradient-to-r from-transparent via-[#15803D]/30 to-transparent lg:block"
            aria-hidden
          />
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#15803D]/25 bg-white text-[#15803D] shadow-[0_4px_14px_rgba(21,128,61,0.18)] dark:border-emerald-500/30 dark:bg-muted dark:text-emerald-400">
                <item.icon className="h-6 w-6" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#15803D] text-xs font-bold text-white shadow-md dark:text-primary-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#0F172A] dark:text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
