"use client";

import { motion } from "framer-motion";
import { Mail, UserPlus, MapPin, FileBarChart } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Erişim talep et",
    desc: "E-posta ile iletisim@oncuintelligence.com adresine demo veya erişim talebinizi iletin.",
    icon: Mail,
  },
  {
    step: 2,
    title: "Hesap aç",
    desc: "Talebiniz değerlendirilir; size hesap bilgileri ve giriş linki iletilecektir.",
    icon: UserPlus,
  },
  {
    step: 3,
    title: "Alan ekle",
    desc: "Panel üzerinden kayıtlı alanlarınızı ekleyin; en fazla üç alan seçebilirsiniz.",
    icon: MapPin,
  },
  {
    step: 4,
    title: "Analiz çalıştır",
    desc: "Güneş, rüzgar, hidroelektrik veya madencilik analizini başlatın; PDF rapor hazırlanır.",
    icon: FileBarChart,
  },
];

export default function HowToStartSection() {
  return (
    <section id="nasil-baslar" className="py-24 bg-[#F8FAFC] relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">Nasıl başlarım?</h2>
          <p className="text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Dört adımda erişim alıp Satenergy panelinde analizlerinizi çalıştırabilirsiniz.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_6px_rgba(15,23,42,0.04)] hover:border-[#15803D]/35 hover:shadow-md transition-all"
            >
              <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-[#15803D] text-white flex items-center justify-center text-sm font-bold shadow-md shadow-[#15803D]/30">
                {item.step}
              </div>
              <div className="pt-2">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] border border-[#15803D]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#15803D]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
