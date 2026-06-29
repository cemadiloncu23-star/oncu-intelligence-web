"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kutgoz_cookie_consent";

export default function ConsentAwareAnalytics() {
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setAllow(localStorage.getItem(STORAGE_KEY) === "all");
      } catch {
        setAllow(false);
      }
    };
    read();
    const onConsent = (e: Event) => {
      const ce = e as CustomEvent<string>;
      setAllow(ce.detail === "all");
    };
    window.addEventListener("kutgoz-consent", onConsent as EventListener);
    const onStorage = (ev: StorageEvent) => {
      if (ev.key === STORAGE_KEY) read();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("kutgoz-consent", onConsent as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!allow) return null;
  return <Analytics />;
}
