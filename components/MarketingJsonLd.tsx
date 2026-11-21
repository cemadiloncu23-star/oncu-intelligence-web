const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oncuintelligence.com";

/**
 * Yapılandırılmış veri. Not: Ana sayfada görünür bir SSS bölümü olmadığı için
 * FAQPage şeması kaldırıldı (Google, sayfada görünmeyen SSS işaretlemesini kabul etmez).
 */
export default function MarketingJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ÖNCÜ Intelligence",
    url: siteUrl,
    logo: `${siteUrl}/oncu-intelligence-logo.png`,
    description:
      "KutGöz: güneş enerjisi santralleri ve yatırım arazileri için uydu tabanlı saha izleme ve fizibilite.",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
  );
}
