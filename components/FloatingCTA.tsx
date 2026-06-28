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
            className="flex items-center justify-center gap-2 rounded-sm border border-zinc-700 bg-[#0e131f]/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-200 shadow-lg backdrop-blur-md transition-colors hover:border-zinc-500 hover:text-white motion-reduce:transition-none"
          >
            İletişim
          </Link>
          <button
            type="button"
            onClick={openDemo}
            className="flex items-center gap-2 rounded-sm bg-zinc-100 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 shadow-lg transition-colors hover:bg-white motion-reduce:transition-none"
          >
            <Mail className="h-4 w-4" />
            Erişim talep et
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
