"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useOpenDemo } from "@/components/DemoOpenContext";

const SCROLL_THRESHOLD = 400;

const HIDE_PATHS = ["/iletisim"];

export default function FloatingCTA() {
  const openDemo = useOpenDemo();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (HIDE_PATHS.some((p) => pathname.startsWith(p))) setVisible(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const hide = HIDE_PATHS.some((p) => pathname.startsWith(p));
      setVisible(!hide && window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex max-w-[calc(100vw-3rem)] flex-col items-end gap-2 sm:flex-row sm:items-center"
        >
          <Link
            href="/iletisim"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-bold text-[#0F172A] shadow-lg transition-colors hover:border-[#15803D]/35 hover:bg-[#F8FAFC] motion-reduce:transition-none dark:border-border dark:bg-card dark:text-foreground dark:hover:bg-muted"
          >
            İletişim
          </Link>
          <button
            type="button"
            onClick={openDemo}
            className="flex items-center gap-2 rounded-xl bg-[#15803D] px-5 py-3 font-bold text-white shadow-lg shadow-[#15803D]/35 transition-all hover:bg-[#166534] motion-reduce:transition-none motion-reduce:hover:scale-100 hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            Erişim talep et
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
