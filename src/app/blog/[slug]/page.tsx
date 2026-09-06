import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { MarkdownContent } from '@/components/markdown-content';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Subhrajit Guchait`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col flex-1 items-center dark:bg-background text-foreground">
      <article className="max-w-170 mx-auto px-5 pt-6 w-full flex flex-col gap-4 pb-16">
        <Link
          href="/blog"
          className="text-xs text-zinc-500 hover:text-zinc-100 transition-colors px-2 w-fit"
        >
          ← All posts
        </Link>
        <div className="px-2">
          <h1 className="text-3xl font-serif text-zinc-100 mb-2">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>{formatDate(post.date)}</span>
            <span>· {post.readingTimeMinutes} min read</span>
          </div>
        </div>
        {post.cover && (
          <div className="px-2">
            <Image
              src={post.cover}
              alt={post.title}
              width={1200}
              height={630}
              className="rounded-xl w-full h-auto object-cover"
              priority
            />
          </div>
        )}
        <Separator />
        <div className="px-2">
          <MarkdownContent content={post.content} />
        </div>
        <div className="flex gap-2 flex-wrap px-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
