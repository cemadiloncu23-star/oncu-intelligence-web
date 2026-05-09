import InnerPageHeader from "@/components/InnerPageHeader";

const topics = [
  {
    title: "Barındırma ve ağ izolasyonu",
    body: "Üretim ortamları için ayrı tenant ve VPC / private endpoint modeli kurulum sırasında dokümante edilir; demo vitrin ise paylaşımlı barındırma kullanır.",
  },
  {
    title: "Şifreleme ve iletim",
    body: "TLS zorunludur; depolanan hassas çıktılar müşteri sözleşmesine göre KMS veya anahtar hibrit yapısı ile yönetilebilir.",
  },
  {
    title: "Erişim kayıtları",
    body: "Oturum günlükleri tutulması ve SIEM ile paylaşımı isteğe bağlı olarak sözleşmeye dahil edilir.",
  },
  {
    title: "Veri yaşam döngüsü",
    body: "Saklama süreleri KVKK aydınlatma metni ile tutarlı olacak şekilde müşteri ve iş birimi işleme envanteri ile kapatılır.",
  },
];

export default function TechnicalTrustPage() {
  return (
    <main id="main" className="min-h-screen bg-slate-100 pb-24 dark:bg-background">
      <InnerPageHeader
        title="Teknik güven — özeti"
        subtitle="Bu metin satış sırasında teknik alımlar için bilgilendirme amaçlıdır ve hukuki tavsiye değildir. Somut gereksinimler DD sürecinde netleştirilir."
      />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        {topics.map((t) => (
          <article key={t.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 dark:border-border dark:bg-card">
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-foreground">{t.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{t.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
