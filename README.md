This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load `Inter` and `Instrument Serif`.

## Blog

Posts live as Markdown files in `content/blog/<slug>.md` with YAML frontmatter (`title`, `date`, `excerpt`, `tags`, optional `cover`). `src/lib/blog.ts` reads them at build time; `src/app/blog/[slug]/page.tsx` statically generates one page per post via `generateStaticParams()`.

Post images go in `public/blog/<slug>/` and are referenced by absolute path (e.g. `/blog/<slug>/diagram.png`) from the Markdown body.

**Image weight convention**: this site is statically exported with `images.unoptimized: true`, so Next does not resize or convert images at build or request time — whatever file is committed is exactly what ships. Resize and compress images before committing, e.g.:

```bash
sips -Z 1200 -s formatOptions 80 original.jpg --out public/blog/<slug>/cover.jpg
```

Keep post images under ~150KB where possible.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
