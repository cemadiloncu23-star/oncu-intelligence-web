"use client";

export default function SectionNext({ href, label }: { href: string; label: string }) {
  return (
    <div className="pointer-events-none flex justify-center py-3">
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-[#64748B] underline-offset-2 transition-colors hover:text-[#15803D] hover:underline dark:text-muted-foreground dark:hover:text-[#86efac]"
      >
        Sonraki: {label}
        <span aria-hidden className="text-sm leading-none">
          ↓
        </span>
      </a>
    </div>
  );
}
