'use-client';
import Image from 'next/image';

const META = {
  email: 'subhrajitguchait20@gmail.com',
};

const LINKS = {
  github: 'https://github.com/subh0x',
  twitter: 'https://github.com/subh0x',
  linkedin: 'https://github.com/subh0x',
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
      '.NET',
      'C#',
      'Typescript',
      'OfficeJS',
      'Python',
      'FastAPI',
      'Postgres',
    ],
  },
];

const NAVBAR_ITEMS = [
  {
    label: 'Home',
    link: '#',
  },
  {
    label: 'Projects',
    link: '#',
  },
  {
    label: 'Résumé',
    link: '#',
  },
  {
    label: 'Contact',
    link: '#',
  },
  {
    label: 'Blog',
    link: '#',
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
function SectionDivider() {
  return <hr className="border-zinc-800 my-5" />;
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#0a0a0a]">
      <div className="max-w-[680px] mx-auto px-5 py-20">
        {/* TODO: Implement a NavBar */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-8 mb-10">
            {NAVBAR_ITEMS.map((navbarItem) => (
              <a className='text-zinc-400' key={navbarItem.label} href={navbarItem.link}>
                {navbarItem.label}
              </a>
            ))}
          </div>
          <div className='text-zinc-400'>IST 21:15</div>
        </div>
        {/* HERO Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-200">
            Subhrajit Guchait
          </h1>
          <h3 className='text-[15px] text-zinc-400 leading-relaxed'>
            I'm a Full Stack Web Developer from Kolkata, India, with 3+ years of
            professional experience in Application Developement and Integration,
            trying to be the friendly neighbourhood developer.
          </h3>
        </div>
        <SectionDivider />
        <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
          Professional Work
        </h2>
        <div className="text-[15px] text-zinc-400 leading-relaxed">
          I specialize in creating user-friendly digital experiences.
          Currently, I'm the Co-founder & CTO at Ravix StudioRavix Studio , a
          startup where I'm building a lot of SAAS products to learn new stuff
          and grow. I also work as a Team Lead at Avenue TicketingAvenue
          Ticketing—proudly the youngest team leader there—where I lead a team
          of 5 developers building a ticketing platform for event organizers
          and attendees. Previously, I worked with Vibranium SoftVibranium
          Soft where we built a B2B flight booking platform for the travel
          industry, Tap InvestTap Invest, where I developed internal dashboard
          tools and created landing pages for their investment platform. For
          more details about my experience, check out my resume.
        </div>
        <SectionDivider />
        <h2 className="text-base font-semibold text-zinc-100 uppercase tracking-widest text-[11px] mb-6">
          Experience
        </h2>
        <div className="space-y-7">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="group">
              <Image
                src="/PwC_Company_Logo.svg"
                alt="PwC logo"
                width={90}
                height={36}
                // priority
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-zinc-100 font-medium">{job.company}</span>
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
        <SectionDivider />
        <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-4">
          What Makes Me Different
        </h2>
        <div className="space-y-3 text-[15px] leading-relaxed text-zinc-400">
          <p>
            I'm not just another developer. I take full ownership of every
            project I work on—I approach problems with both a technical and
            business mindset. Great code means nothing if it doesn't solve real
            problems.
          </p>
          <p>
            While I embrace AI-assisted development, I do it differently. I
            leverage AI to build powerful systems faster, but always with proper
            supervision, code review, and architectural oversight. Quality and
            productivity—the best of both worlds.
          </p>
        </div>
        <SectionDivider />
        <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
          Writing
        </h2>
        <div className="text-[15px] text-zinc-400 leading-relaxed">
          I've started writing blogs to help others improve their engineering
          skills. Stay tuned for more content!
        </div>
        <p className="text-sm text-zinc-600 mt-4">
          Stay tuned for more content.
        </p>
        <SectionDivider />
        <h2 className="text-[11px] font-semibold text-zinc-100 uppercase tracking-widest mb-5">
          Let's Get in Touch
        </h2>
        <div className="flex gap-5 flex-wrap text-sm text-zinc-400 mb-6">
          {[
            { label: 'Email', href: `mailto:${META.email}` },
            { label: 'GitHub', href: LINKS.github },
            { label: 'Twitter', href: LINKS.twitter },
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
  );
}
