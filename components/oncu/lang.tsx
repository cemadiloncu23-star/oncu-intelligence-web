"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "tr" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; L: (tr: string, en: string) => string };

const LangCtx = createContext<Ctx>({ lang: "tr", setLang: () => {}, L: (tr) => tr });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("oncu-lang");
      if (saved === "en" || saved === "tr") setLangState(saved);
    } catch {
      /* depolama kapalıysa varsayılan TR */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("oncu-lang", l);
    } catch {
      /* yoksay */
    }
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return <LangCtx.Provider value={{ lang, setLang, L: (tr, en) => (lang === "tr" ? tr : en) }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
