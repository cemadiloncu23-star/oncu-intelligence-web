"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function SavingsEstimatorSection() {
  return (
    <section id="hesap-araci" className="scroll-mt-20 bg-white py-24 dark:bg-card">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 text-center dark:border-border dark:bg-muted/40 md:p-10"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#15803D]/25 bg-[#DCFCE7] dark:border-emerald-500/35 dark:bg-emerald-950/40">
            <Calculator className="h-7 w-7 text-[#15803D] dark:text-emerald-400" aria-hidden />
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-4xl">
            Tasarruf ve maliyet etkisi
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground md:text-base">
            Enerji tasarrufu veya maliyet etkisi yalnızca ölçüm, sahada doğrulama ve denetimle hesaplanabilir. Bu sitede
            gösterim amaçlı tahmini rakamlar veya oyuncak hesaplayıcı bulunmaz; ihtiyaç analizi için ekibimize yazabilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-xl bg-[#15803D] px-8 py-3.5 font-bold text-white shadow-md shadow-[#15803D]/30 transition-colors hover:bg-[#166534] dark:text-primary-foreground"
          >
            Teknik görüşme talebi
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
