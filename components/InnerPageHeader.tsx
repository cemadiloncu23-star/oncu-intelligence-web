import Link from "next/link";

export default function InnerPageHeader({
  title,
  subtitle,
  backHref = "/",
  backLabel = "← Ana sayfa",
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="pt-28 pb-10 px-4 bg-[#F8FAFC] border-b border-[#E2E8F0] dark:border-border dark:bg-card">
      <div className="max-w-3xl mx-auto">
        <Link href={backHref} className="text-sm font-semibold text-[#15803D] hover:underline mb-4 inline-block dark:text-primary">
          {backLabel}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight dark:text-foreground">{title}</h1>
        {subtitle ? <p className="text-[#64748B] mt-3 leading-relaxed dark:text-muted-foreground">{subtitle}</p> : null}
      </div>
    </header>
  );
}
