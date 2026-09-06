import Link from 'next/link';
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Writing — Subhrajit Guchait',
  description:
    'Notes on the roadblocks I hit building software, and how I solved them.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1 items-center dark:bg-background text-foreground">
      <div className="max-w-170 mx-auto px-5 pt-6 w-full flex flex-col gap-4">
        <div className="px-2">
          <h1 className="text-2xl font-serif text-zinc-100 mb-1">Writing</h1>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Notes on the roadblocks I hit building software, and how I solved
            them.
          </p>
        </div>
        <Separator />
        <div className="px-2 flex flex-col gap-8 pb-10">
          {posts.length === 0 && (
            <p className="text-sm text-zinc-500">
              No posts yet — check back soon.
            </p>
          )}
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-serif text-zinc-100 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <span className="text-xs text-zinc-600 shrink-0">
                  {formatDate(post.date)}
                </span>
              </div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex gap-2 flex-wrap items-center mt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-zinc-600">
                  · {post.readingTimeMinutes} min read
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
