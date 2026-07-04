"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { Enso } from "@/components/motifs";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the slide-over when navigation changes the route.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const solid = !isHome || scrolled;
  const estimateHref = isHome ? "/#quote" : "/estimate";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-sand/70 bg-stone/90 text-ink shadow-[0_1px_24px_-12px_rgb(35_38_31/0.25)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-mist"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${SITE.name}, back to top`}
        >
          <Enso
            className={`h-8 w-8 ${solid ? "text-sage" : "text-mist"}`}
            strokeWidth={15}
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] font-medium tracking-tight">
              {SITE.wordmark}
            </span>
            <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] opacity-70">
              {SITE.wordmarkSub}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] opacity-85 transition hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold tracking-wide transition hover:opacity-80 xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link
            href={estimateHref}
            className={`hidden rounded-full px-5 py-2.5 text-[0.8rem] font-semibold tracking-wide transition duration-300 sm:inline-flex ${
              solid
                ? "bg-pine text-mist hover:bg-pine-deep"
                : "bg-mist text-pine hover:bg-stone"
            }`}
          >
            Get a Free Estimate
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
            className="-mr-1 p-1 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="menu-backdrop absolute inset-0 bg-ink/45 backdrop-blur-sm"
          />
          <div className="menu-panel absolute right-0 top-0 flex h-full w-[19.5rem] max-w-[85vw] flex-col overflow-y-auto bg-mist p-7 text-ink shadow-2xl">
            <div className="flex items-center justify-between">
              <Enso className="h-8 w-8 text-sage" strokeWidth={15} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-sand/60 py-4 font-display text-xl text-pine transition hover:text-sage"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={estimateHref}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-pine px-6 py-3.5 text-sm font-semibold tracking-wide text-mist transition hover:bg-pine-deep"
            >
              Get a Free Estimate
            </Link>
            <div className="mt-auto pt-10 text-sm leading-relaxed text-ink/75">
              <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold text-pine">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a href={SITE.emailHref} className="mt-2 block break-all hover:text-pine">
                {SITE.email}
              </a>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-ink/55">
                {SITE.serviceArea}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
