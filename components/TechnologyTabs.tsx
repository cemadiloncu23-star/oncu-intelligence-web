"use client";

import { useState, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Plug, Zap } from "lucide-react";

const tabs = [
  {
    id: "analytics",
    label: "Enerji analitiği",
    icon: BarChart3,
    content: {
      title: "Tüketim ve verimlilik",
      description:
        "Tesis metrikleri ve (uygun kurulumda) karşılaştırma görünümleri; ISO 50001 odaklı çıktı hedefleri sözleşmeye göre kapsanır.",
      stats: ["Tesis & sektör kıyası", "ISO 50001 şablonları", "Tasarruf görünürlüğü"],
    },
  },
  {
    id: "data",
    label: "Uydu & veri",
    icon: DatabaseIcon,
    content: {
      title: "Uydu istihbaratı",
      description:
        "Konum bazlı analizlerde True Color ve indeks katmanları; üretim analizi akışında arka planda işlenen rapor çıktıları.",
      stats: ["Konum özeti", "Çok katmanlı görselleştirme", "PDF rapor pipeline"],
    },
  },
  {
    id: "reports",
    label: "Raporlama",
    icon: Zap,
    content: {
      title: "Kurumsal raporlar",
      description:
        "EVD / ISO çerçevesine uygun şablon hedefleri ve denetim izi; finansal satırlar ve AI destekli özetler kurulum kapsamına bağlıdır.",
      stats: ["Şablonlu export", "CAPEX / OPEX görünümü", "Denetim izi"],
    },
  },
  {
    id: "platform",
    label: "Tek panel",
    icon: Plug,
    content: {
      title: "Operasyon tek ekranda",
      description:
        "Verimlilik merkezi, alarmlar, üretim analizi ve ÖNCÜ Zeka — KutGöz kullanıcı paneliyle aynı modüler düzen.",
      stats: ["Tek oturum", "Çoklu tesis", "Rol bazlı erişim"],
    },
  },
];

function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export default function TechnologyTabs() {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <section id="surecler" className="py-24 bg-[#F8FAFC] relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#15803D]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4338CA]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">Nasıl çalışıyor?</h2>
          <p className="text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Veriden rapora uzanan süreç — Satenergy kurumsal akışıyla uyumlu.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                  activeTab === tab.id
                    ? "bg-white border border-[#15803D]/40 shadow-[0_4px_20px_rgba(21,128,61,0.12)]"
                    : "bg-transparent border border-transparent hover:bg-white/80"
                }`}
              >
                <div
                  className={`p-3 rounded-lg transition-colors ${
                    activeTab === tab.id ? "bg-[#15803D] text-white" : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#E2E8F0]"
                  }`}
                >
                  <tab.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      activeTab === tab.id ? "text-[#0F172A]" : "text-[#64748B] group-hover:text-[#0F172A]"
                    }`}
                  >
                    {tab.label}
                  </h3>
                </div>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-4 w-2 h-2 rounded-full bg-[#15803D] shadow-[0_0_10px_rgba(21,128,61,0.5)]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <div className="relative bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center shadow-[0_24px_48px_rgba(15,23,42,0.06)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#15803D]/10 to-transparent rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4338CA]/10 to-transparent rounded-bl-3xl" />

              <AnimatePresence mode="wait">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-[#F1F5F9] rounded-xl border border-[#E2E8F0]">
                            <tab.icon className="w-8 h-8 text-[#15803D]" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight">{tab.content.title}</h3>
                        </div>
                        <p className="text-[#64748B] text-lg leading-relaxed mb-8">{tab.content.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {tab.content.stats.map((stat, i) => (
                            <div key={i} className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
                              <div className="w-2 h-2 rounded-full bg-[#15803D] mb-3" />
                              <p className="font-mono text-sm text-[#0F172A]">{stat}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
