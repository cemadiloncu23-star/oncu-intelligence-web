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
    <section id="yetenekler" className="relative overflow-hidden bg-[#070a13] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">// yetenekler</p>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              Tek panelde uçtan uca operasyon
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-zinc-500">
            Sahadan rapora kadar dört çekirdek modül, aynı altyapıda birleşir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="group relative flex flex-col gap-4 bg-[#070a13] p-7 transition-colors hover:bg-[#0a0d16]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-zinc-800 bg-white/[0.02] text-zinc-400">
                  <it.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="font-mono text-xs text-zinc-700">{it.code}</span>
              </div>
              <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold tracking-tight text-zinc-200">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">{it.desc}</p>
              <span className="mt-auto h-px w-0 bg-zinc-600 transition-all duration-500 group-hover:w-8" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
