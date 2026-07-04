"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

type Shot = { src: string; alt: string };

/*
 * Comparison slider driven by a full-surface range input, so it works with
 * mouse, touch, and keyboard (arrow keys) with no extra event handling.
 */
export default function BeforeAfter({
  before,
  after,
}: {
  before: Shot;
  after: Shot;
}) {
  const [pos, setPos] = useState(56);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative aspect-video select-none overflow-hidden rounded-2xl border border-sand/70 shadow-card">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-mist/90"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mist text-pine shadow-lift">
            <ChevronsLeftRight className="h-5 w-5" />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare before and after photos"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
