"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="referanslar" className="scroll-mt-20 bg-white py-24 dark:bg-card">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mx-auto mb-6 inline-flex rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-border dark:bg-muted/40">
            <ShieldCheck className="h-10 w-10 text-[#15803D]" aria-hidden />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Referans ve iş birliği
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Bu vitrin sayfasında hazır müşteri alıntısı veya logo kullanılmamaktadır. İzinli referansları veya güvenilirlik
            bilgisini doğrudan talep etmek için iletişim kanalına yazabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl bg-[#15803D] px-8 py-3 font-bold text-white shadow-md shadow-[#15803D]/30 transition-colors hover:bg-[#166534] dark:text-primary-foreground"
            >
              Bizimle iletişime geçin
            </Link>
            <a
              href="mailto:iletisim@oncuintelligence.com"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#4338CA]/25 bg-[#EEF2FF] px-6 py-3 font-bold text-[#3730a3] transition-colors hover:bg-[#E0E7FF]"
            >
              iletisim@oncuintelligence.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
