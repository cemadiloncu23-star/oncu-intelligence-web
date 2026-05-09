"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, Sparkles } from "lucide-react";
import { useOpenDemo } from "@/components/DemoOpenContext";
import { getMeetingUrl } from "@/lib/site-config";

export default function CTABand() {
  const openDemo = useOpenDemo();
  const meetingUrl = getMeetingUrl();

  return (
    <section id="cta" className="relative scroll-mt-20 bg-[#F1F5F9] py-20 dark:bg-muted/40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#15803D]/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center shadow-[0_24px_48px_rgba(15,23,42,0.08)] dark:border-border dark:bg-card md:p-12"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4338CA]/15 bg-[#EEF2FF] px-3 py-1 text-sm font-semibold text-[#4338CA]">
            <Sparkles className="h-4 w-4" />
            Kurumsal tanıtım
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-4xl">
            Ürünü birlikte değerlendirelim mi?
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Erişim, pilot süreleri ve uygunluk kriterleri için iletişim veya doğrudan tanımda seçtiğiniz kanalı
            kullanabilirsiniz; koşullar yazılı olarak netleştirilir.
          </p>
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-xl bg-[#15803D] px-8 py-4 font-bold text-white shadow-[0_4px_14px_rgba(21,128,61,0.35)] transition-all hover:bg-[#166534] dark:text-primary-foreground"
            >
              Erişim talep et
              <ChevronRight className="h-5 w-5" />
            </motion.button>
            {meetingUrl ? (
              <a
                href={meetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#4338CA]/25 bg-[#EEF2FF] px-8 py-4 font-bold text-[#3730a3] transition-colors hover:bg-[#E0E7FF] dark:bg-indigo-950/40 dark:text-indigo-200"
              >
                <Calendar className="h-5 w-5" />
                Görüşme planla
              </a>
            ) : null}
          </div>
          {!meetingUrl ? (
            <p className="mt-4 text-[11px] text-[#94A3B8] dark:text-slate-500">
              Toplantı linki için{" "}
              <code className="rounded bg-[#F1F5F9] px-1 dark:bg-muted">
                NEXT_PUBLIC_MEETING_URL
              </code>{" "}
              tanımlayın (Cal.com / Calendly vb.).
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
