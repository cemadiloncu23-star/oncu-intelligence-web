"use client";

import { motion } from "framer-motion";
import { Gauge, MapPinned, BellRing, Sparkles } from "lucide-react";

const items = [
  {
    icon: Gauge,
    code: "01",
    title: "Verimlilik merkezi",
    desc: "Tesis bazlı tüketim, sektör kıyası ve ekipman kırılımı tek panoda.",
  },
  {
    icon: MapPinned,
    code: "02",
    title: "Üretim analizi",
    desc: "Güneş, rüzgâr, hidro ve madencilik potansiyeli için uydu destekli analiz.",
  },
  {
    icon: BellRing,
    code: "03",
    title: "Alarm merkezi",
    desc: "Eşik ve kural bazlı bildirimler; rol bazlı önceliklendirme.",
  },
  {
    icon: Sparkles,
    code: "04",
    title: "ÖNCÜ Zeka",
    desc: "Kuruluş verinize bağlamda soru sorun; denetim izli içgörü.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Capabilities() {
  return (
    <section id="yetenekler" className="relative scroll-mt-16 overflow-hidden bg-[#070a13] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#38BDF8]">// yetenekler</p>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Tek panelde uçtan uca operasyon
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-slate-400">
            Sahadan rapora kadar dört çekirdek modül, aynı altyapıda birleşir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="group relative flex flex-col gap-4 bg-[#070a13] p-7 transition-colors hover:bg-[#0b1120]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#38BDF8]/20 bg-[#38BDF8]/[0.08] text-[#38BDF8]">
                  <it.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span className="font-mono text-xs text-slate-600">{it.code}</span>
              </div>
              <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold tracking-tight text-white">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{it.desc}</p>
              <span className="mt-auto h-px w-0 bg-gradient-to-r from-[#38BDF8] to-transparent transition-all duration-500 group-hover:w-full" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
