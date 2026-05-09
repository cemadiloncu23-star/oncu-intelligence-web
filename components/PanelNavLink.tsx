"use client";

import type { ReactNode } from "react";
import { ExternalLink, LayoutDashboard } from "lucide-react";
import { getPanelLink } from "@/lib/site-config";

type Props = {
  className?: string;
  children?: ReactNode;
  onNavigate?: () => void;
};

/** Tanıtım sitesinden panele (veya panel talebine) tek tip çıkış */
export default function PanelNavLink({ className, children, onNavigate }: Props) {
  const { href, openInNewTab, isConfigured } = getPanelLink();

  return (
    <a
      href={href}
      onClick={onNavigate}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={className}
      title={isConfigured ? "Kurumsal panel — yeni sekme" : "Panel erişimi için e-posta gönder"}
    >
      {children ?? (
        <>
          <LayoutDashboard className="w-4 h-4 shrink-0 opacity-90" aria-hidden />
          <span>Kurumsal panel</span>
          {isConfigured && openInNewTab ? (
            <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
          ) : null}
        </>
      )}
    </a>
  );
}
