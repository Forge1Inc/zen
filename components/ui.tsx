import Link from "next/link";
import type { ReactNode } from "react";

export function CTALink({
  href,
  children,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const padding = size === "lg" ? "px-9 py-4 text-[0.95rem]" : "px-7 py-3.5 text-sm";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-pine font-semibold tracking-wide text-mist transition duration-300 hover:-translate-y-0.5 hover:bg-pine-deep hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${padding} ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const tones =
    tone === "dark"
      ? "border-mist/40 text-mist hover:border-mist/70 hover:bg-mist/10"
      : "border-pine/30 text-pine hover:border-pine/60 hover:bg-pine/5";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold tracking-wide transition duration-300 ${tones} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-mist" : "text-pine";
  const ledeColor = tone === "dark" ? "text-stone/75" : "text-ink/70";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="eyebrow text-sage">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${ledeColor}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
