"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ClipboardCheck, TrendingDown, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Ölç",
    desc: "Tesis tüketimi, üretim ve operasyon verisi panelde toplanır; uydu katmanlarıyla zenginleştirilir.",
  },
  {
    icon: ClipboardCheck,
    title: "Doğrula",
    desc: "Sahada doğrulama ve denetimle baz çizgisi oluşturulur; veri kalitesi kontrol edilir.",
  },
  {
    icon: TrendingDown,
    title: "Raporla",
    desc: "Tasarruf ve maliyet etkisi doğrulanmış veriye dayanarak raporlanır — şişirilmiş tahmin yok.",
  },
];

export default function SavingsEstimatorSection() {
  return (
    <section id="hesap-araci" className="scroll-mt-20 bg-white py-24 dark:bg-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803D] dark:text-emerald-400">
            Tasarruf değerlendirmesi
          </p>
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-4xl">
            Tasarrufu tahminle değil, ölçümle ortaya koyarız
          </h2>
          <p className="text-pretty leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Enerji tasarrufu ve maliyet etkisi yalnızca ölçüm, sahada doğrulama ve denetimle hesaplanır.
            Süreç üç adımda ilerler.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-border dark:bg-muted/40"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#15803D]/25 bg-[#DCFCE7] text-[#15803D] dark:border-emerald-500/35 dark:bg-emerald-950/40 dark:text-emerald-400">
                <s.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mb-2 flex items-center gap-2 font-bold text-[#0F172A] dark:text-foreground">
                <span className="text-sm font-extrabold text-[#15803D] dark:text-emerald-400">{i + 1}.</span>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-8 py-3.5 font-bold text-white shadow-md shadow-[#15803D]/30 transition-colors hover:bg-[#166534] dark:text-primary-foreground"
          >
            Teknik görüşme talebi
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
