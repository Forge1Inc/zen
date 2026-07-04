# AAA Zen Gardens & Home Services

Marketing and lead generation site for AAA Zen Gardens & Home Services,
serving the GTA and Southern Ontario. Built with Next.js (App Router),
TypeScript, and Tailwind CSS. Hosted on Netlify.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. A `Makefile` with `dev`, `build`, and `lint`
targets is included if you prefer `make`.

## Environment

Copy `.env.example` to `.env.local`. One variable matters:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public base URL, used in metadata, sitemap, robots, and JSON-LD. Set to the production URL in Netlify. |

## Where things live

- `lib/site.ts` holds the business constants (name, phone, email, Instagram,
  service area, hours). Change contact details here and they update
  everywhere.
- `lib/content.ts` holds services, process steps, testimonials, towns, and
  gallery items. Testimonials and towns are placeholders, marked with
  comments. Edit them there.
- `content/blog/*.md` are the blog posts. Frontmatter needs `title`, `date`
  (YYYY-MM-DD, quoted), `category`, and `excerpt`. Drop a new `.md` file in
  and it appears on the blog automatically at build.
- `components/sections/` are the home page sections in page order.

## Lead capture (Netlify Forms)

Both the home page quote form and `/estimate` submit to a single Netlify
form named `estimate-lead`. The static registration lives in
`public/__forms.html`; keep its field names in sync with
`components/QuoteForm.tsx` if you add fields.

Submissions appear in the Netlify dashboard under **Forms**. To get an email
for each lead: Netlify dashboard, Forms, Form notifications, add an email
notification pointing at the business inbox.

Note: submissions only work on the deployed Netlify site. In local dev the
form shows the fallback with direct phone and email contact instead.

## Swapping in real photos

All photography is placeholder stock (Unsplash) and is labelled as sample
imagery in the UI. To replace: edit the `src` values in `lib/content.ts`
(gallery, before/after, hero). Local files in `public/images/` work too;
use paths like `/images/project-1.jpg`.

## Deploying

The Netlify project is `aaa-zen-gardens` (team Forge 1), live at
https://aaa-zen-gardens.netlify.app. `netlify.toml` pins the build (Node 22,
Next.js runtime).

To make every push to `main` deploy automatically, link the repo once in
Netlify: Site configuration, Build & deploy, Link repository, pick
`Forge1Inc/zen`. Until then, deploys are run manually (Netlify CLI
`netlify deploy --build --prod`, or through the dashboard).
