"use client";

import { motion } from "framer-motion";
import { Lock, Server, Shield } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "KVKK & gizlilik",
    text: "Aydınlatma ve politika sayfaları bu sitede yer alır; işleme envanterinizi kurum içi tamamlayın.",
  },
  {
    icon: Lock,
    title: "HTTPS oturum",
    text: "Panel ve tanıtım sitesi TLS ile sunulmalıdır; üretimde sertifika ve HSTS yapılandırması önerilir.",
  },
  {
    icon: Server,
    title: "Veri konumu",
    text: "Barındırma bölgesi ve yedekleme politikası sözleşmede netleştirilir; bu sitedeki madde hukuki tavsiye içermez.",
  },
];

export default function ComplianceBadges() {
  return (
    <section id="uyumluluk" className="scroll-mt-20 border-t border-[#E2E8F0] bg-white py-20 dark:border-border dark:bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4338CA] dark:text-indigo-300">
            Uyumluluk ve güven
          </p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-3xl">
            Güvenlik ve uyumluluk temelimiz
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Rozetler bilgilendirme amaçlıdır; regülasyon gereksinimleri sektörünüze ve sözleşmenize göre değişir.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-colors hover:border-[#4338CA]/25 dark:border-border dark:bg-muted/30 dark:hover:border-indigo-500/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white dark:border-border dark:bg-card">
                <b.icon className="h-5 w-5 text-[#4338CA] dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-[#0F172A] dark:text-foreground">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
