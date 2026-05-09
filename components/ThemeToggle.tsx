"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-9 shrink-0 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] dark:border-border dark:bg-card" aria-hidden />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] transition-colors hover:border-[#15803D]/30 hover:bg-[#DCFCE7]/50 hover:text-[#166534] dark:border-border dark:bg-card dark:text-foreground dark:hover:border-primary/35 dark:hover:bg-primary/15"
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
