"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const stats = [
  { label: "Modül odağı", value: "4", hint: "Verimlilik · üretim analizi · alarmlar · ÖNCÜ Zeka" },
  { label: "Rapor çıktısı", value: "PDF", hint: "Kuruluşunuza uygun şablon ve denetim izi hedeflenir" },
  { label: "Hedef kullanıcı", value: "B2B", hint: "Sanayi, enerji hizmetleri ve danışmanlık ekipleri" },
];

export default function PartnerTrustSection() {
  return (
    <section id="guven" className="scroll-mt-20 border-y border-[#E2E8F0] bg-white py-16 dark:border-border dark:bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] dark:text-muted-foreground">
          Ürün çerçevesi
        </p>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-[#64748B] dark:text-muted-foreground">
          <FileText className="h-5 w-5 shrink-0 text-[#15803D]" aria-hidden />
          <span>
            Müşteri logoları veya isimleri yalnızca yazılı izin sonrası bu sitede yer alır; vitrin içeriği genel ürün
            tanımıdır.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-center dark:border-border dark:bg-muted/30"
            >
              <p className="mb-1 text-3xl font-bold text-[#15803D] dark:text-emerald-400">{s.value}</p>
              <p className="mb-2 font-semibold text-[#0F172A] dark:text-foreground">{s.label}</p>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{s.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
