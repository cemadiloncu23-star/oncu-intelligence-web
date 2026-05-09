import InnerPageHeader from "@/components/InnerPageHeader";
import { resources } from "@/lib/content/resources";

export default function ResourcesPage() {
  return (
    <>
      <InnerPageHeader
        title="Kaynaklar"
        subtitle="Site içi geçerli bağlantılar; dışarıdan sürdürülen blog veya indirilebilir doküman eklendiğinde genişletilebilir."
      />
      <div className="mx-auto grid max-w-3xl gap-4 px-4 py-12 pb-24">
        {resources.map((r) => (
          <a
            key={r.title}
            href={r.href}
            className="block rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-colors hover:border-[#15803D]/30 dark:border-border dark:bg-card"
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-[#4338CA] dark:text-indigo-400">{r.tag}</span>
            <h2 className="mb-2 mt-1 text-lg font-bold text-[#0F172A] dark:text-foreground">{r.title}</h2>
            <p className="text-sm leading-relaxed text-[#64748B] dark:text-muted-foreground">{r.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}
