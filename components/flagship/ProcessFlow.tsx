"use client";

import { motion } from "framer-motion";
import { SatelliteDish, Cpu, FileText } from "lucide-react";

const steps = [
  {
    icon: SatelliteDish,
    code: "01 / YAKALA",
    title: "Uydu verisi alımı",
    desc: "Seçilen alan için Sentinel uydu geçişleri ve çok bantlı görüntüler toplanır.",
  },
  {
    icon: Cpu,
    code: "02 / İŞLE",
    title: "İndeks & katman üretimi",
    desc: "NDVI, NDWI, NDBI ve termal indeksler hesaplanır; veri kalitesi doğrulanır.",
  },
  {
    icon: FileText,
    code: "03 / RAPORLA",
    title: "Denetime hazır çıktı",
    desc: "Versiyonlanmış PDF raporlar ve panel görünümleri tek oturumda hazırlanır.",
  },
];

const metrics = [
  { v: "5", k: "analiz katmanı" },
  { v: "10m", k: "çözünürlük / px" },
  { v: "12", k: "spektral bant" },
  { v: "PDF", k: "denetim çıktısı" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProcessFlow() {
  return (
    <section id="surec" className="relative scroll-mt-16 overflow-hidden bg-[#030712] py-28">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "44px 44px" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#38BDF8]">// süreç</p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Veriden rapora, üç adımda
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* bağlantı çizgisi */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-[#38BDF8]/40 via-white/10 to-transparent md:block" aria-hidden />
          {steps.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="relative"
            >
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#38BDF8]/25 bg-[#070a13] text-[#38BDF8] shadow-[0_0_30px_-8px_rgba(56,189,248,0.5)]">
                <s.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{s.code}</p>
              <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold tracking-tight text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* metrik şeridi */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] md:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.k} className="flex flex-col items-center gap-1 bg-[#030712] px-4 py-8 text-center">
              <dt className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-white">{m.v}</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">{m.k}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
