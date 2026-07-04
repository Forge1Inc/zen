"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Scroll-triggered fade-up. Content renders visible on the server and is only
 * hidden after hydration when it sits below the fold, so nothing disappears
 * if JavaScript never runs. Reduced motion gets opacity only (see globals).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setPhase("shown");
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setPhase("shown");
      return;
    }

    setPhase("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPhase("shown");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);

    const safety = window.setTimeout(() => setPhase("shown"), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  const stateClass =
    phase === "hidden" ? "reveal-init" : phase === "shown" ? "reveal-in" : "";

  return (
    <div
      ref={ref}
      className={`${stateClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
