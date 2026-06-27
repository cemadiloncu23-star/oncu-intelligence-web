"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, GitBranch, Microscope, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: Microscope,
    title: "Ölçüme dayalı",
    desc: "Tasarruf ve potansiyel rakamları yalnızca sahada doğrulanmış veri ve denetimle paylaşılır; gösterim amaçlı şişirilmiş sayı kullanmayız.",
  },
  {
    icon: GitBranch,
    title: "İzlenebilir çıktı",
    desc: "Her rapor versiyonlanır ve denetim izi panelde saklanır; çıktının hangi veriyle üretildiği takip edilebilir.",
  },
  {
    icon: ShieldCheck,
    title: "İzinli referans",
    desc: "Müşteri adı, logosu veya alıntısı yalnızca yazılı onayla yayımlanır. Güvenilirlik bilgisini doğrudan talep edebilirsiniz.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="referanslar" className="scroll-mt-20 bg-white py-24 dark:bg-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803D] dark:text-emerald-400">
            Güven & metodoloji
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-4xl">
            Rakamlarla değil, doğrulanabilir çıktıyla güven
          </h2>
          <p className="text-pretty leading-relaxed text-[#64748B] dark:text-muted-foreground">
            Hazır müşteri alıntısı yerine, çıktılarımızı güvenilir kılan çalışma prensiplerini paylaşıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-border dark:bg-muted/30"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#15803D]/20 bg-[#15803D]/[0.06] text-[#15803D] dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400">
                <p.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mb-2 font-bold text-[#0F172A] dark:text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-7 py-3 font-bold text-white shadow-md shadow-[#15803D]/30 transition-colors hover:bg-[#166534] dark:text-primary-foreground"
          >
            Güvenilirlik bilgisi talep edin
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="mailto:iletisim@oncuintelligence.com"
            className="inline-flex items-center justify-center rounded-xl border-2 border-[#4338CA]/25 bg-[#EEF2FF] px-6 py-3 font-bold text-[#3730a3] transition-colors hover:bg-[#E0E7FF]"
          >
            iletisim@oncuintelligence.com
          </a>
        </div>
      </div>
    </section>
  );
}
