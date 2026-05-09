import InnerPageHeader from "@/components/InnerPageHeader";
import ContactForm from "@/components/ContactForm";
import { getTurnstileSiteKey } from "@/lib/site-config";

export default function ContactPage() {
  const turnstileSiteKey = getTurnstileSiteKey();

  return (
    <>
      <InnerPageHeader
        title="İletişim"
        subtitle="Demo, pilot veya teknik sorularınız için formu doldurun. İsterseniz doğrudan e-posta da kullanabilirsiniz."
      />
      <div className="max-w-3xl mx-auto px-4 py-12 pb-24">
        <ContactForm turnstileSiteKey={turnstileSiteKey || undefined} />
      </div>
    </>
  );
}
