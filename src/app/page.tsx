import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { EXPERIENCE } from '@/constants/experience';
import { MarkdownContent } from '@/components/markdown-content';
import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

const META = {
  email: 'subhrajitguchait20@gmail.com',
};

const LINKS = {
  github: 'https://github.com/subh0x',
  linkedin: 'https://www.linkedin.com/in/subhrajitguchait/',
};

const ExternalLinkIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="inline-block ml-1 opacity-50"
    >
      <path
        d="M2 2h8v8M10 2 2 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col flex-1 items-center justify-center dark:bg-background text-foreground">
      <div className="max-w-170 mx-auto px-5 pt-6 flex flex-col gap-4">
        <div className="px-2 flex flex-col items-start">
          <div className="flex flex-row items-center justify-center w-full gap-4 pb-6">
            <div>
              <Image
                src="/subhrajit-guchait-2.jpeg"
                alt={'Subhrajit Guchait'}
                className="rounded-xl object-cover"
                width={60}
                height={60}
                priority
              />
            </div>
            <h1 className="text-4xl font-serif tracking-tight bg-linear-to-r from-zinc-100 via-blue-400 to-zinc-400 bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
              Subhrajit Guchait
            </h1>
          </div>
          <h3 className="text-[15px] text-zinc-400 leading-relaxed">
            I&rsquo;m a Full Stack Developer from Kolkata, India, with ~3 years
            of professional experience in Application Development and
            Integration in React, .NET &amp; Python.
          </h3>
        </div>

        <Separator />
        <div className="px-2">
          <h2 className="text-base font-semibold text-zinc-100 uppercase tracking-widest text-[11px] mb-6">
            Experience
          </h2>
          <div className="space-y-9">
            {EXPERIENCE.map((job) => (
              <div key={job.company}>
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="text-zinc-100 text-xl font-serif scale-x-[1.2] pl-2">
                    {job.company}
                  </span>
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={24}
                    height={24}
                    className="h-6 w-auto dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="space-y-6">
                  {job.roles.map((role) => (
                    <div key={role.title} className="group">
                      <div className="flex items-baseline justify-between">
                        <p className="text-xs text-zinc-500 mt-0.5 mb-2">
                          {role.title}
                        </p>
                        <span className="text-xs text-zinc-600 shrink-0">
                          {role.period}
                        </span>
                      </div>
                      <MarkdownContent
                        content={role.description}
                        className="text-[14px] text-zinc-400 leading-relaxed prose-ul:mt-2 prose-ul:pl-4 prose-li:text-zinc-400"
                      />
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="px-2">
          <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-4">
            What Makes Me Different
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-zinc-400">
            <p>
              I&rsquo;m not just another developer. I take full ownership of
              every project I work on. I approach problems with both a technical
              and business mindset. Great code means nothing if it doesn&rsquo;t
              solve real problems.
            </p>
            <p>
              While I embrace AI-assisted development, I do it differently. I
              leverage AI to build powerful systems faster, but always with
              proper supervision, code review, and architectural oversight.
              Quality and productivity, the best of both worlds.
            </p>
          </div>
        </div>

        <Separator />
        <div className="px-2">
          <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
            Writing
          </h2>
          {recentPosts.length > 0 ? (
            <div className="flex flex-col gap-5">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[15px] text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </span>
                    <span className="text-xs text-zinc-600 shrink-0">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100 transition-colors w-fit"
              >
                View all posts
                <ExternalLinkIcon />
              </Link>
            </div>
          ) : (
            <>
              <div className="text-[15px] text-zinc-400 leading-relaxed">
                I&rsquo;ve started writing blogs to jot down my most important
                roadblocks and their solutions to improve my skills.
              </div>
              <p className="text-sm text-zinc-600 mt-4">
                Stay tuned for more content.
              </p>
            </>
          )}
        </div>

        <Separator />
        <div className="px-2 relative max-sm:mb-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(125%_115%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
          />
          <div className="aspect-120/40">
            <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
              Let&rsquo;s Get in Touch
            </h2>
            <div className="flex gap-5 flex-wrap text-sm text-zinc-400 mb-6">
              {[
                { label: 'Email', href: `mailto:${META.email}` },
                { label: 'GitHub', href: LINKS.github },
                { label: 'LinkedIn', href: LINKS.linkedin },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-zinc-100 transition-colors"
                >
                  {label} <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
