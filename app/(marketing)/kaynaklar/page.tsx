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
            className="block rounded-sm border border-zinc-800 bg-[#0e131f] p-6 transition-colors hover:border-zinc-700"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-zinc-500">{r.tag}</span>
            <h2 className="mb-2 mt-1 text-lg font-bold text-zinc-100">{r.title}</h2>
            <p className="text-sm leading-relaxed text-zinc-400">{r.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}
