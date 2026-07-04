"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/*
 * Fixed bottom bar on mobile with the two conversion paths. It slides away
 * while the quote form is on screen so it never covers the submit button.
 */
export default function MobileActionBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  // Reset visibility when the route changes; pages without a quote form
  // should always show the bar.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setHidden(false);
  }

  useEffect(() => {
    const quote = document.getElementById("quote");
    if (!quote || !("IntersectionObserver" in window)) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setHidden(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(quote);
    return () => io.disconnect();
  }, [pathname]);

  if (pathname.startsWith("/estimate")) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-2 border-t border-sand bg-mist/95 py-4 text-sm font-semibold text-pine backdrop-blur"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <Link
        href={pathname === "/" ? "/#quote" : "/estimate"}
        className="flex items-center justify-center border-t border-pine bg-pine py-4 text-sm font-semibold text-mist"
      >
        Free Estimate
      </Link>
    </div>
  );
}
