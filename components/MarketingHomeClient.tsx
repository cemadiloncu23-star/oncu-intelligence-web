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

export default function MarketingHomeClient() {
  return (
    <main
      id="main"
      className="min-h-screen bg-slate-100 text-[#0F172A] selection:bg-[#15803D]/20 selection:text-[#0F172A] dark:bg-background dark:text-foreground dark:selection:bg-primary/25 dark:selection:text-foreground"
    >
      <HeroSection />
      <PartnerTrustSection />
      <AudienceSegmentsSection />
      <HowToStartSection />
      <BentoGrid />
      <TechnologyTabs />
      <TestimonialsSection />
      <ComparisonSection />
      <SavingsEstimatorSection />
      <PricingSection />
      <RoadmapSection />
      <FAQSection />
      <ComplianceBadges />
      <CTABand />
    </main>
  );
}
