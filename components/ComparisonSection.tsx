"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const capabilities = [
  "Tek panelden verimlilik görünümü ve üretim analizi akışları",
  "Konum özetinde uydu katmanları ve rapor pipeline hedefi",
  "Kurumsal PDF şablonları ve denetim izi odaklı çıktılar",
  "Alarm merkezi ve önceliklendirme",
  "ÖNCÜ Zeka ile bağlama dayalı sohbet / içgörü hedefi",
  "Rol bazlı erişim ve çoklu tesis senaryosu",
];

export default function ComparisonSection() {
  return (
    <section id="karsilastirma" className="scroll-mt-20 bg-[#F8FAFC] py-24 dark:bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Platform özellik özeti
          </h2>
          <p className="leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Aşağıdaki liste ürün yönünde hedeflenen yetkinlikleri özetler. Gerçekleşen kapsam sözleşme ve teknik mimariye
            göre netleştirilir; başka araçlar veya süreçlerle kıyas iddiası içermez.
          </p>
        </motion.div>
        <ul className="space-y-3 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-border dark:bg-card md:p-8">
          {capabilities.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-start gap-3 text-sm text-[#475569] dark:text-muted-foreground md:text-[15px]"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#15803D] dark:text-emerald-400" aria-hidden />
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
