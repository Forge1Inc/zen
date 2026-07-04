import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readingMinutes: number;
};

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

export function getPosts(): Post[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const words = content.trim().split(/\s+/).length;
    return {
      slug,
      title: String(data.title ?? slug),
      date: normalizeDate(data.date),
      category: String(data.category ?? "Garden Care"),
      excerpt: String(data.excerpt ?? ""),
      content,
      readingMinutes: Math.max(2, Math.round(words / 225)),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}
