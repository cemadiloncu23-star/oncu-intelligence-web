"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Leaf,
  Satellite,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { getPanelLink, panelButtonLabel } from "@/lib/site-config";
import { useOpenDemo } from "@/components/DemoOpenContext";

const fieldEase = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const openDemo = useOpenDemo();
  const panel = getPanelLink();

  return (
    <section
      id="tanitim"
      className="relative min-h-[min(100vh,920px)] flex flex-col lg:flex-row overflow-hidden bg-[#F1F5F9] pt-16 text-[#0F172A]"
    >
      {/* Sol panel — KutGöz Login.jsx ile aynı görsel dil */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col justify-between p-10 xl:p-14 relative bg-[#0F172A] text-[#F8FAFC] overflow-hidden min-h-[560px]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0F172A] to-[#064e3b]/90" />
          <div
            className="absolute -right-[8%] top-[18%] w-[min(92vw,46rem)] h-[min(92vw,46rem)] rounded-full opacity-[0.45]"
            style={{
              background:
                "radial-gradient(ellipse 58% 48% at 42% 48%, rgba(34,211,238,0.22) 0%, rgba(22,163,74,0.28) 32%, transparent 72%)",
            }}
          />
          <div
            className="absolute left-[-20%] bottom-[-35%] w-[120%] h-[85%] opacity-[0.35]"
            style={{
              background:
                "radial-gradient(ellipse 55% 40% at 55% 100%, rgba(15,118,110,0.55) 0%, rgba(15,23,42,0.2) 45%, transparent 70%)",
            }}
          />
          <motion.div
            className="absolute left-[6%] top-[38%] w-[min(70vw,520px)] h-[min(55vw,400px)] opacity-[0.28]"
            animate={{ opacity: [0.22, 0.34, 0.22] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 480 360" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="heroOrbitGlow" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="rgba(74,222,128,0)" />
                  <stop offset="45%" stopColor="rgba(74,222,128,0.35)" />
                  <stop offset="100%" stopColor="rgba(14,165,233,0.15)" />
                </linearGradient>
              </defs>
              <ellipse
                cx="260"
                cy="200"
                rx="208"
                ry="132"
                stroke="url(#heroOrbitGlow)"
                strokeWidth="1"
                strokeDasharray="5 14"
                opacity="0.9"
              />
              <ellipse
                cx="260"
                cy="200"
                rx="248"
                ry="164"
                stroke="rgba(148,163,184,0.25)"
                strokeWidth="0.6"
                strokeDasharray="3 18"
                transform="rotate(-8 260 200)"
              />
              <circle cx="420" cy="72" r="5" fill="rgba(226,232,240,0.75)" />
              <path
                d="M418 73 L392 118"
                stroke="rgba(203,213,225,0.25)"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 36px)",
            }}
          />
        </div>
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#FFFFFF 0.5px, transparent 0.5px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div
          className="absolute top-[-20%] right-[-10%] w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle, #15803D 0%, transparent 70%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[22rem] h-[22rem] rounded-full opacity-15 blur-3xl pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle, #4338CA 0%, transparent 70%)" }}
          aria-hidden
        />

        <motion.div
          className="relative z-10 flex items-center gap-4"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: fieldEase }}
        >
          <span className="rounded-xl overflow-hidden shadow-lg shadow-black/25 ring-1 ring-white/15 shrink-0">
            <BrandLogo variant="heroDesktop" priority />
          </span>
          <div>
            <div className="text-xs font-bold text-[#4ADE80] tracking-[0.18em] uppercase">
              KutGöz
            </div>
            <div className="text-[11px] text-[#94A3B8] font-medium tracking-wide">
              Uydu istihbaratı · Enerji verimliliği
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: fieldEase }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-[#A5B4FC] mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Kurumsal denetim & raporlama
            </div>
            <h1 className="text-4xl xl:text-[2.75rem] font-bold tracking-tight leading-[1.15]">
              Şirketler için{" "}
              <span className="text-[#4ADE80]">enerji verimliliği</span> operasyonu
            </h1>
            <p className="mt-4 text-[#CBD5E1] text-base leading-relaxed">
              Tesis bazlı tüketim, sektör kıyası ve ISO 50001 uyumlu çıktılar — tek oturumda.
            </p>
          </motion.div>

          <ul className="space-y-3.5 pt-2">
            {[
              { icon: BarChart3, text: "Tesis skoru ve sektör karşılaştırması" },
              { icon: Leaf, text: "Karbon ve tasarruf potansiyeli görünürlüğü" },
              { icon: ShieldCheck, text: "EVD / ISO 50001 rapor şablonları" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.45, ease: fieldEase }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#15803D]/20 border border-[#15803D]/35 flex items-center justify-center shrink-0 text-[#4ADE80]">
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <p className="text-[13px] text-[#E2E8F0] leading-relaxed font-medium pt-1">{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-medium text-[#64748B] uppercase tracking-[0.12em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <span>© 2026 ÖNCÜ Intelligence</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]" />
          <span>Sanayi · ESCO · Danışmanlık</span>
        </motion.div>
      </div>

      {/* Mobil üst blok */}
      <div className="lg:hidden relative px-6 pt-10 pb-8 bg-[#0F172A] text-[#F8FAFC] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#94A3B8 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative flex items-center gap-3 mb-6">
          <span className="rounded-xl overflow-hidden shadow-lg shadow-black/30 ring-1 ring-white/15 shrink-0">
            <BrandLogo variant="heroMobile" priority />
          </span>
          <div>
            <div className="text-xs font-bold text-[#4ADE80] tracking-[0.18em] uppercase">KutGöz</div>
            <div className="text-[11px] text-[#94A3B8] font-medium">Uydu istihbaratı · Enerji verimliliği</div>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-[#A5B4FC] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Kurumsal denetim & raporlama
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
          Şirketler için <span className="text-[#4ADE80]">enerji verimliliği</span> operasyonu
        </h1>
        <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
          Tesis bazlı tüketim, sektör kıyası ve ISO 50001 uyumlu çıktılar — tek oturumda.
        </p>
      </div>

      {/* Sağ — CTA (giriş formu yerine tanıtım aksiyonları) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-12 relative z-10 bg-[#F1F5F9]">
        <div
          className="pointer-events-none absolute -right-[12%] top-1/2 -translate-y-1/2 w-[min(55vw,22rem)] h-[min(55vw,22rem)] opacity-[0.06] hidden sm:block text-[#15803D]"
          aria-hidden
        >
          <Satellite className="w-full h-full" strokeWidth={0.9} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: fieldEase }}
          className="w-full max-w-[440px] relative z-10 space-y-6"
        >
          <div className="rounded-2xl border border-[#E2E8F0] bg-white/95 backdrop-blur-sm shadow-[0_4px_6px_rgba(15,23,42,0.04),0_24px_48px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#15803D] via-[#166534] to-[#0E7490]" />
            <div className="p-8 sm:p-9">
              <p className="text-[11px] font-semibold text-[#4338CA] uppercase tracking-widest mb-2">
                Üretim & izleme
              </p>
              <h2 className="text-2xl sm:text-[1.65rem] font-bold text-[#0F172A] tracking-tight">
                Alan bazlı enerji analizi
              </h2>
              <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                Kayıtlı alanlarınızdan üç seçimle güneş, rüzgar, hidroelektrik ve madencilik analizleri;
                seçilen alanları sistem üzerinden sürekli izleyin.
              </p>

              <div className="mt-8 grid gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={openDemo}
                  className="w-full min-h-[3rem] rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-[#15803D] text-white hover:bg-[#166534] shadow-[0_4px_14px_rgba(21,128,61,0.35)] border border-[#166534]/80 transition-colors"
                >
                  <span>Demo / erişim talebi</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </motion.button>

                <a
                  href={panel.href}
                  target={panel.openInNewTab ? "_blank" : undefined}
                  rel={panel.openInNewTab ? "noopener noreferrer" : undefined}
                  className="w-full min-h-[3rem] rounded-xl font-bold text-sm flex items-center justify-center gap-2 border-2 border-[#4338CA]/20 bg-[#EEF2FF] text-[#312e81] hover:border-[#4338CA]/45 hover:bg-[#E0E7FF] transition-colors"
                >
                  <span>{panelButtonLabel(panel.isConfigured)}</span>
                  <ChevronRight className="w-5 h-5 text-[#4338CA]" aria-hidden />
                </a>

                <a
                  href="mailto:destek@oncuintelligence.com"
                  className="text-center text-xs font-semibold text-[#15803D] hover:text-[#166534] underline underline-offset-2 decoration-[#15803D]/40 pt-1"
                >
                  Sorun mu yaşıyorsunuz? Destek ile iletişime geçin
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-wrap gap-4 text-xs text-[#475569]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Zap className="w-4 h-4 text-[#EA580C]" />
                  Üretim analizi
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-4 h-4 text-[#4338CA]" />
                  ÖNCÜ Zeka
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] text-[#64748B]">
            Güvenli bağlantı · Oturum şifrelenir · ÖNCÜ Intelligence altyapısı
          </p>
        </motion.div>
      </div>
    </section>
  );
}
