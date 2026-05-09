"use client";

import HeroSection from "@/components/HeroSection";
import PartnerTrustSection from "@/components/PartnerTrustSection";
import AudienceSegmentsSection from "@/components/AudienceSegmentsSection";
import HowToStartSection from "@/components/HowToStartSection";
import BentoGrid from "@/components/BentoGrid";
import TechnologyTabs from "@/components/TechnologyTabs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SavingsEstimatorSection from "@/components/SavingsEstimatorSection";
import PricingSection from "@/components/PricingSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FAQSection";
import ComplianceBadges from "@/components/ComplianceBadges";
import CTABand from "@/components/CTABand";
import SectionNext from "@/components/SectionNext";

export default function MarketingHomeClient() {
  return (
    <main
      id="main"
      className="min-h-screen bg-slate-100 text-[#0F172A] selection:bg-[#15803D]/20 selection:text-[#0F172A] dark:bg-background dark:text-foreground dark:selection:bg-primary/25 dark:selection:text-foreground"
    >
      <HeroSection />
      <SectionNext href="#guven" label="Ortak güven şeridi" />

      <PartnerTrustSection />
      <SectionNext href="#kim-icin" label="Kimler için?" />

      <AudienceSegmentsSection />
      <SectionNext href="#nasil-baslar" label="Nasıl başlarım?" />

      <HowToStartSection />
      <SectionNext href="#platform" label="Platform özellikleri" />

      <BentoGrid />
      <SectionNext href="#surecler" label="Teknik süreçler" />

      <TechnologyTabs />
      <SectionNext href="#referanslar" label="Referans politikası" />

      <TestimonialsSection />
      <SectionNext href="#karsilastirma" label="Özellik özeti" />

      <ComparisonSection />
      <SectionNext href="#hesap-araci" label="Tasarruf değerlendirmesi" />

      <SavingsEstimatorSection />
      <SectionNext href="#erisim" label="Erişim seçenekleri" />

      <PricingSection />
      <SectionNext href="#yol-haritasi" label="Yol haritası" />

      <RoadmapSection />
      <SectionNext href="#sss" label="Sıkça sorulan sorular" />

      <FAQSection />
      <SectionNext href="#uyumluluk" label="Uyumluluk ve güven" />

      <ComplianceBadges />
      <SectionNext href="#cta" label="Toplantı veya demo" />

      <CTABand />
      <SectionNext href="/iletisim" label="İletişim formu" />
    </main>
  );
}
