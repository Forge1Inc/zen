import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getPosts, formatDate } from "@/lib/posts";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Troy"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Troy" },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <main className="bg-stone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-2xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-ink/55 transition hover:text-pine"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All posts
        </Link>

        <header className="mt-8">
          <p className="eyebrow text-sage">{post.category}</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.1] tracking-tight text-pine sm:text-[2.9rem]">
            {post.title}
          </h1>
          <p className="mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink/50">
            By Troy · {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
        </header>

        <hr className="my-10 border-sand" />

        <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-pine prose-p:leading-relaxed prose-p:text-ink/80 prose-a:text-water prose-a:decoration-water/40 prose-a:underline-offset-4 hover:prose-a:decoration-water prose-blockquote:border-sage prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-pine/90 prose-strong:text-ink prose-li:leading-relaxed prose-li:text-ink/80 prose-hr:border-sand">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-16 rounded-2xl bg-raked bg-pine p-9 text-center sm:p-12">
          <p className="eyebrow text-sage-mist">Your sanctuary, your zen</p>
          <h2 className="mt-3 font-display text-2xl font-normal text-mist">
            Planning something for your own yard?
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-stone/75">
            Book a free walkthrough and we&rsquo;ll put a real plan behind it.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center rounded-full bg-mist px-7 py-3.5 text-sm font-semibold tracking-wide text-pine transition duration-300 hover:bg-stone"
            >
              Get a Free Estimate
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-mist/40 px-6 py-3.5 text-sm font-semibold tracking-wide text-mist transition duration-300 hover:border-mist/70 hover:bg-mist/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
