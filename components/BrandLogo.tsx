"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const SRC = "/oncu-intelligence-logo.png";

type Variant = "navbar" | "heroDesktop" | "heroMobile";

const styles: Record<Variant, { width: number; height: number; className: string }> = {
  navbar: {
    width: 320,
    height: 320,
    className: "h-9 w-auto max-w-[140px] sm:h-10 sm:max-w-[168px]",
  },
  heroDesktop: {
    width: 400,
    height: 400,
    className: "h-[72px] w-auto max-w-[220px]",
  },
  heroMobile: {
    width: 360,
    height: 360,
    className: "h-[52px] w-auto max-w-[180px]",
  },
};

export default function BrandLogo({
  variant,
  priority = false,
  className = "",
}: {
  variant: Variant;
  priority?: boolean;
  className?: string;
}) {
  const s = styles[variant];
  return (
    <Image
      src={SRC}
      alt="ÖNCÜ Intelligence"
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn("object-contain object-left", s.className, className)}
    />
  );
}
