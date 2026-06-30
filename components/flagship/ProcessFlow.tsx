"use client";

import { motion } from "framer-motion";
import { SatelliteDish, Cpu, FileText } from "lucide-react";

const steps = [
  {
    icon: SatelliteDish,
    code: "01 / YAKALA",
    title: "Uydu verisi alımı",
    desc: "KutGöz, seçilen alan için Sentinel uydu geçişleri ve çok bantlı görüntüleri otomatik toplar.",
  },
  {
    icon: Cpu,
    code: "02 / İŞLE",
    title: "İndeks & katman üretimi",
    desc: "NDVI, NDWI, NDBI ve termal indeksler hesaplanır; veri kalitesi panelde doğrulanır.",
  },
  {
    icon: FileText,
    code: "03 / RAPORLA",
    title: "Denetime hazır çıktı",
    desc: "Versiyonlanmış PDF raporlar ve operasyon görünümleri KutGöz kullanıcı panelinde hazırlanır.",
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
    <section id="surec" className="relative overflow-hidden bg-[#070a13] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">// çözümlerimiz</p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            KutGöz — şirketimizin ilk uygulaması
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-500 sm:text-base">
            <span className="font-semibold text-zinc-300">KutGöz</span>, ÖNCÜ Intelligence&apos;ın enerji yatırım ve takip
            alanındaki ilk ürünüdür. Uydu istihbaratı, verimlilik merkezi, üretim analizi, alarm yönetimi ve ÖNCÜ Zeka
            katmanlarını tek kurumsal panelde birleştirir. Aşağıdaki üç adım, KutGöz&apos;ün sahadan denetime hazır rapora
            uzanan çekirdek iş akışını özetler.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* bağlantı çizgisi (nötr) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-zinc-800 md:block" aria-hidden />
          {steps.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="relative"
            >
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-sm border border-zinc-800 bg-[#070a13] text-zinc-400">
                <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">{s.code}</p>
              <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold tracking-tight text-zinc-200">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* metrik şeridi */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-zinc-800 bg-zinc-800 md:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.k} className="flex flex-col items-center gap-1 bg-[#070a13] px-4 py-8 text-center">
              <dt className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-zinc-200">{m.v}</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-600">{m.k}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
