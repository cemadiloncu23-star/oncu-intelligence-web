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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-2 tracking-tight">Uyumluluk ve güven</h2>
          <p className="text-[#64748B] text-sm max-w-2xl mx-auto leading-relaxed">
            Rozetler bilgilendirme amaçlıdır; regülasyon gereksinimleri sektörünüze ve sözleşmenize göre değişir.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 flex gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-[#4338CA]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">{b.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
