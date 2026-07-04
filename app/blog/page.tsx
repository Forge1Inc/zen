import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/posts";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on zen gardens, landscaping, and garden care in the GTA and Southern Ontario, written by Troy.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getPosts();
  const [latest, ...rest] = posts;

  return (
    <main className="bg-stone">
      <header className="border-b border-sand/70 bg-mist">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-36">
          <p className="eyebrow text-sage">Field notes</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-pine sm:text-5xl">
            Notes from the field.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            Practical writing on gardens, landscapes, and keeping a property
            calm and healthy in Southern Ontario. Written by Troy.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {latest ? (
          <Reveal>
            <Link
              href={`/blog/${latest.slug}`}
              className="group block rounded-2xl border border-sand/80 bg-mist p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:border-sage/60 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-12"
            >
              <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                <span className="rounded-full bg-sage/15 px-3.5 py-1.5 text-sage">
                  {latest.category}
                </span>
                <span className="text-ink/50">Latest</span>
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-normal leading-[1.12] tracking-tight text-pine transition group-hover:text-pine-deep sm:text-4xl">
                {latest.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
                {latest.excerpt}
              </p>
              <p className="mt-7 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink/50">
                By Troy · {formatDate(latest.date)} · {latest.readingMinutes} min
                read
              </p>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 70}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-sand/80 bg-mist p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-sage/60 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="self-start rounded-full bg-sage/15 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-sage">
                  {post.category}
                </span>
                <h2 className="mt-5 font-display text-xl font-medium leading-snug text-pine transition group-hover:text-pine-deep">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink/65">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink/45">
                  {formatDate(post.date)} · {post.readingMinutes} min read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
