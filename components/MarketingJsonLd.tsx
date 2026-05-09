import { marketingFaqs } from "@/lib/marketing-faqs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oncuintelligence.com";

export default function MarketingJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ÖNCÜ Intelligence",
    url: siteUrl,
    logo: `${siteUrl}/oncu-intelligence-logo.png`,
    description:
      "Uydu istihbaratı ve enerji verimliliği: Satenergy ürün hattı ile kurumsal panel, raporlama ve ISO 50001 uyumlu çıktılar.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: marketingFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
