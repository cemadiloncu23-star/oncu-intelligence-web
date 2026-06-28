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
    <header className="relative overflow-hidden border-b border-zinc-800 bg-[#070a13] px-4 pt-32 pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <Link
          href={backHref}
          className="mb-4 inline-flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-zinc-200"
        >
          {backLabel}
        </Link>
        <h1 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-zinc-100 md:text-4xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-3 leading-relaxed text-zinc-400">{subtitle}</p> : null}
      </div>
    </header>
  );
}
