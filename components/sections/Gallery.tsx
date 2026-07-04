"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BEFORE_AFTER,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
} from "@/lib/content";
import { SectionHeading } from "@/components/ui";
import { RakedDivider } from "@/components/motifs";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";

type Filter = "All" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const items =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="work" className="scroll-mt-20 bg-stone">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title="Recent transformations."
            lede="Sample photos stand in below while we build out our project archive. Real gardens are on the way."
          />
        </Reveal>

        <Reveal>
          <div
            role="group"
            aria-label="Filter projects by type"
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {(["All", ...GALLERY_CATEGORIES] as Filter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2.5 text-[0.78rem] font-semibold tracking-wide transition duration-300 ${
                  filter === cat
                    ? "border-pine bg-pine text-mist"
                    : "border-sand bg-mist text-ink/70 hover:border-sage/60 hover:text-pine"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={filter}
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {items.map((item) => (
            <figure
              key={item.src}
              className="fade-item group relative mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <div
                className={`relative w-full ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.045] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <figcaption className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/65 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-mist backdrop-blur-sm transition duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 sm:mt-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-sage">Before &amp; after</p>
              <h3 className="mt-4 font-display text-2xl font-normal text-pine sm:text-3xl">
                Drag the line. See the difference.
              </h3>
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <BeforeAfter
              before={BEFORE_AFTER.before}
              after={BEFORE_AFTER.after}
            />
          </Reveal>
        </div>
      </div>
      <RakedDivider className="mt-16 text-sand sm:mt-20" />
    </section>
  );
}
