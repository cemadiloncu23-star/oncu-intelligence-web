"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bell,
  ChevronRight,
  Cpu,
  Gauge,
  Layers,
  MapPin,
  Radar,
  Sparkles,
  Zap,
} from "lucide-react";

const tags = ["ISO 50001 uyumu", "Uydu & katman", "Çok lokasyon", "Kurumsal RBAC"];

const items = [
  {
    title: "Verimlilik Merkezi",
    description:
      "Tesis kartları, tüketim trendleri ve ekipman kırılımları tek akışta. Denetçi ve sürdürülebilirlik ekiplerine hazır özlar ve KPI panoları.",
    headerClass:
      "from-[#15803D]/20 via-emerald-500/15 to-teal-600/15 border-emerald-800/15 dark:border-emerald-500/20",
    headerIcon: Gauge,
    headerIconColor: "text-[#15803D] dark:text-emerald-400",
    accent: "Saha & operasyon",
    icon: <Gauge className="h-4 w-4 text-[#15803D] dark:text-emerald-400" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Üretim Analizi",
    description:
      "Üç alana kadar izinli bölgede güneş, rüzgâr ve hidro potansiyeline dair uydu destekli analiz ve arşivlenmiş rapor çıktıları.",
    headerClass:
      "from-amber-100/90 to-orange-50/80 border-orange-400/25 dark:from-orange-950/50 dark:to-amber-950/30 dark:border-orange-500/25",
    headerIcon: MapPin,
    headerIconColor: "text-[#EA580C] dark:text-orange-400",
    accent: "Uydu iş hatları",
    icon: <MapPin className="h-4 w-4 text-[#EA580C] dark:text-orange-400" />,
    className: "md:col-span-1",
  },
  {
    title: "Alarm Merkezi",
    description:
      "Eşik ve kural bazlı bildirimler; öncelik sırasına göre sıralama. Operasyon görünümü için kurumsal rollerle filtrelenir.",
    headerClass:
      "from-red-50/95 to-rose-50/70 border-red-300/35 dark:from-red-950/45 dark:to-rose-950/35 dark:border-red-500/25",
    headerIcon: Bell,
    headerIconColor: "text-[#B91C1C] dark:text-red-400",
    accent: "7/24 izleme",
    icon: <Bell className="h-4 w-4 text-[#B91C1C] dark:text-red-400" />,
    className: "md:col-span-1",
  },
  {
    title: "ÖNCÜ Zeka & denetim",
    description:
      "Kuruluş verinize bağlamda soru sorun; oturum ve rapor çıktılarını bağlayın. Denetim geçmişi ve versiyonlanmış çıktılar panelde saklanır.",
    headerClass:
      "from-indigo-100/90 via-violet-50/80 to-indigo-50/60 border-indigo-400/25 dark:from-indigo-950/60 dark:to-violet-950/35 dark:border-indigo-500/30",
    headerIcon: Sparkles,
    headerIconColor: "text-[#4338CA] dark:text-indigo-400",
    accent: "Sohbet · içgörü",
    icon: (
      <span className="flex items-center gap-1">
        <Sparkles className="h-4 w-4 text-[#4338CA] dark:text-indigo-400" />
        <Radar className="h-4 w-4 text-[#7C3AED] dark:text-violet-400" />
      </span>
    ),
    className: "md:col-span-2",
  },
];

function CardHeader({
  accent,
  gradientClass,
  Icon,
  iconClass,
}: {
  accent: string;
  gradientClass: string;
  Icon: ComponentType<{ className?: string }>;
  iconClass: string;
}) {
  return (
    <div
      className={`relative flex min-h-[6.75rem] w-full overflow-hidden rounded-xl border bg-gradient-to-br ${gradientClass}`}
    >
      <Icon
        className={`pointer-events-none absolute -bottom-3 -right-2 h-[5.25rem] w-[5.25rem] opacity-[0.12] dark:opacity-[0.18] ${iconClass}`}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.45)_0%,transparent_55%)] dark:bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
      <div className="relative z-[1] flex flex-1 flex-col justify-between p-3">
        <span className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/55 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#475569] shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-black/25 dark:text-slate-200">
          <Zap className="h-3 w-3" aria-hidden />
          {accent}
        </span>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section
      id="platform"
      className="scroll-mt-20 border-y border-[#E2E8F0] bg-[#F1F5F9] py-24 dark:border-border dark:bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4338CA]/20 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4338CA] shadow-sm backdrop-blur-sm dark:border-indigo-500/30 dark:bg-card/90 dark:text-indigo-300">
            <Layers className="h-3.5 w-3.5" aria-hidden />
            Platform
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] dark:text-foreground md:text-5xl">
            Kurumsal panelde dört ana modül
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-[#64748B] dark:text-muted-foreground md:text-lg">
            KutGöz ile aynı ürün ailesinden verimlilik, üretim analizi, alarmlar ve ÖNCÜ Zeka katmanları — tek oturumda
            bağlanır; bu sayfa yalnızca vitrin özeti içerir.
          </p>

          <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-semibold text-[#475569] shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-border dark:bg-card dark:text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <Link
              href="/iletisim"
              className="text-sm font-bold text-[#15803D] underline-offset-4 hover:underline dark:text-emerald-400"
            >
              Bilgi veya demo talebi → iletişim
            </Link>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className={`group/card flex flex-col justify-between space-y-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition hover:border-[#15803D]/20 hover:shadow-lg dark:border-border dark:bg-card dark:hover:border-emerald-500/30 ${item.className}`}
            >
              <CardHeader
                accent={item.accent}
                gradientClass={item.headerClass}
                Icon={item.headerIcon}
                iconClass={item.headerIconColor}
              />

              <div className="group-hover/card:translate-x-0.5 flex flex-col space-y-2 transition-[transform] duration-200">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">{item.icon}</div>
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#CBD5E1] opacity-0 transition group-hover/card:opacity-100 dark:text-slate-600"
                    aria-hidden
                  />
                </div>
                <h3 className="font-bold text-[#0F172A] dark:text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#64748B] dark:text-muted-foreground md:text-sm">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center px-2"
        >
          <div className="inline-flex max-w-lg flex-wrap items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-sm text-[#475569] shadow-sm dark:border-border dark:bg-card dark:text-muted-foreground">
            <Cpu className="mt-0.5 h-5 w-5 shrink-0 text-[#64748B] dark:text-slate-400" aria-hidden />
            <p className="text-left leading-relaxed">
              <strong className="text-[#0F172A] dark:text-foreground">Sistem &amp; güvenlik:</strong> roller, oturum, iletişim
              ayarları ve organizasyon bağlamı kurumsal panelde yönetilir; bu tanıtım sayfasından panele doğrudan erişim{" "}
              <span className="whitespace-nowrap font-semibold text-[#15803D] dark:text-emerald-400">Navbar</span> üzerinden
              yapılır.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
