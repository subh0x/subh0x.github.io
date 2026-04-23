'use-client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const META = {
  email: 'subhrajitguchait20@gmail.com',
};

const LINKS = {
  github: 'https://github.com/subh0x',
  // twitter: '#',
  linkedin: '#',
  resume: '#',
};

const EXPERIENCE = [
  {
    company: 'PwC India',
    role: 'Associate - Software Engineer',
    period: '2023 – Present',
    description:
      'Leading engineering for a suite of SaaS products. Built the full infrastructure from zero to paying customers.',
    tags: [
      'Excel',
      'Powerpoint',
      '.NET',
      'C#',
      'Javascript',
      'Typescript',
      'OfficeJS',
      'React',
      'Python',
      'FastAPI',
      'AI Engineering',
      'Postgres',
      'Azure',
    ],
  },
];

function ExternalLinkIcon() {
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
      <div className="max-w-[680px] mx-auto px-5 py-10 flex flex-col gap-4">
        <div className="pb-10">
          <Link
            href="/"
            className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
          >
            <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
              New
            </span>
            <span className="text-sm">Introducing Portfolio</span>
            <span className="bg-(--color-border) block h-4 w-px"></span>

            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-serif tracking-tight text-zinc-200">
            Subhrajit Guchait
          </h1>
          <h3 className="text-[15px] text-zinc-400 leading-relaxed">
            I'm a Full Stack Developer from Kolkata, India, with 3+ years of
            professional experience in Application Developement and Integration.
          </h3>
        </div>
        <Separator />
        <div>
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
        <div>
          <h2 className="text-base font-semibold text-zinc-100 uppercase tracking-widest text-[11px] mb-6">
            Experience
          </h2>
          <div className="space-y-7">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="group">
                <Image
                  src="/pwc-logo.svg"
                  alt="PwC logo"
                  width={90}
                  height={36}
                  // priority
                  className="h-10 w-auto dark:brightness-0 dark:invert"
                />
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-zinc-100 font-medium">
                    {job.company}
                  </span>
                  <span className="text-xs text-zinc-600 shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5 mb-2">{job.role}</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            href={LINKS.resume}
            className="inline-flex items-center mt-6 text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100 transition-colors"
          >
            View full résumé
            <ExternalLinkIcon />
          </a>
        </div>
        <Separator />
        <div>
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
              Quality and productivity—the best of both worlds.
            </p>
          </div>
        </div>

        <Separator />
        <div>
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
        <div className="relative max-sm:mb-6">
          <div
            aria-hidden
            className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
          />
          <div className="aspect-120/40 p-1 px-6">
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
                  className="hover:text-zinc-100 transition-colors"
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
