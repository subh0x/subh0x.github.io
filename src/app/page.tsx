'use-client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { EXPERIENCE } from '@/constants/experience';
import ReactMarkdown from 'react-markdown';

const META = {
  email: 'subhrajitguchait20@gmail.com',
};

const LINKS = {
  github: 'https://github.com/subh0x',
  linkedin: 'https://www.linkedin.com/in/subhrajitguchait/',
  resume: '#',
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
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center dark:bg-background text-foreground">
      <div className="max-w-[680px] mx-auto px-5 pt-10 flex flex-col gap-4">
        <div className="px-2 pb-6">
          <Link
            href="/"
            className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
          >
            <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
              New
            </span>
            <span className="text-sm">Personal Portfolio</span>
            <span className="bg-(--color-border) block h-4 w-px"></span>

            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="px-2 flex flex-col items-start">
          <h1 className="text-3xl font-serif tracking-tight bg-gradient-to-r from-zinc-100 via-blue-400 to-zinc-400 bg-clip-text text-transparent">
            Subhrajit Guchait
          </h1>
          <h3 className="text-[15px] text-zinc-400 leading-relaxed">
            I'm a Full Stack Developer from Kolkata, India, with 3+ years of
            professional experience in Application Developement and Integration
            in React, .NET & Python.
          </h3>
        </div>
        <Separator />
        <div className="px-2">
          <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
            Professional Work
          </h2>
          <div className="text-[15px] text-zinc-400 leading-relaxed">
            I specialize in creating office .NET VSTO add-ins for the MS Office
            suite and OfficeJS Web Add-ins. Recently I have been working on
            Integrating OfficeJS add-ins with AI Tools.
          </div>
        </div>

        <Separator />
        <div className="px-2">
          <h2 className="text-base font-semibold text-zinc-100 uppercase tracking-widest text-[11px] mb-6">
            Experience
          </h2>
          <div className="space-y-7">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="group">
                <div className="flex items-center justify-between gap-2">
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
                <div className="flex items-baseline justify-between">
                  <p className="text-xs text-zinc-500 mt-0.5 mb-2">
                    {job.role}
                  </p>
                  <span className="text-xs text-zinc-600 shrink-0">
                    {job.period}
                  </span>
                </div>
                <div className="w-full max-w-none text-[14px] text-zinc-400 leading-relaxed prose prose-invert prose-sm prose-ul:mt-2 prose-ul:pl-4 prose-li:text-zinc-400">
                  <ReactMarkdown>{job.description}</ReactMarkdown>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {job.tags.map((tag) => (
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
          {/* <a
            href={LINKS.resume}
            className="inline-flex items-center mt-6 text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100 transition-colors"
          >
            View full résumé
            <ExternalLinkIcon />
          </a> */}
        </div>
        <Separator />
        <div className="px-2">
          <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-4">
            What Makes Me Different
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-zinc-400">
            <p>
              I'm not just another developer. I take full ownership of every
              project I work on. I approach problems with both a technical and
              business mindset. Great code means nothing if it doesn't solve
              real problems.
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
          <div className="text-[15px] text-zinc-400 leading-relaxed">
            I've started writing blogs to jot down my most important roadblocks
            and their solutions to improve my skills.
          </div>
          <p className="text-sm text-zinc-600 mt-4">
            Stay tuned for more content.
          </p>
        </div>

        <Separator />
        <div className="px-2 relative max-sm:mb-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(125%_115%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
          />
          <div className="aspect-120/40">
            <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
              Let's Get in Touch
            </h2>
            <div className="flex gap-5 flex-wrap text-sm text-zinc-400 mb-6">
              {[
                { label: 'Email', href: `mailto:${META.email}` },
                { label: 'GitHub', href: LINKS.github },
                // { label: 'Twitter', href: LINKS.twitter },
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
