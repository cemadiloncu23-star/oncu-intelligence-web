"use client";

import { motion } from "framer-motion";
import { Check, ChevronRight, MessageCircle } from "lucide-react";
import { useOpenDemo } from "@/components/DemoOpenContext";

const benefits = [
  "Üç alana kadar izin verilen sahalar üzerinden üretim analizi süreçleri (kurulumunuza bağlı)",
  "Seçilen alanların izlenebilmesi için panel akışları",
  "PDF çıktılar: süreç ve şablon kapsamı sözleşmeye göre",
  "Kurumsal panel temasıyla uyumlu modül yapısı",
];

export default function PricingSection() {
  const openDemo = useOpenDemo();

  return (
    <section id="erisim" className="relative scroll-mt-20 bg-[#F1F5F9] py-24 dark:bg-muted/40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#15803D]/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803D] dark:text-emerald-400">
            Erişim ve pilot
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            İhtiyacınıza göre kurgulanan erişim
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Ücret, süre ve kapsam proje görüşmesi ve sözleşmeye göre belirlenir; standart kalıp yerine kuruluşunuza özel kurgu.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border-2 border-[#15803D]/35 bg-white p-8 shadow-[0_24px_48px_rgba(21,128,61,0.08)] dark:border-emerald-500/30 dark:bg-card md:p-10"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#15803D] text-white shadow-md shadow-[#15803D]/35 dark:text-primary-foreground">
              <MessageCircle className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-foreground">Talep oluşturun</h3>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">
                İhtiyaç özeti ile birlikte dönüş alırsınız; form veya e-posta kullanılabilir.
              </p>
            </div>
          </div>
          <ul className="mb-8 space-y-4">
            {benefits.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#15803D] dark:text-emerald-400" />
                <span className="text-sm leading-relaxed text-[#475569] dark:text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={openDemo}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#15803D] py-4 font-bold text-white shadow-[0_4px_14px_rgba(21,128,61,0.35)] transition-all hover:bg-[#166534] dark:text-primary-foreground"
          >
            Erişim talep et
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
