import { contactLinks, type Area } from '../content';
import { href } from '../useHashRoute';
import AreaLayout from '../components/AreaLayout';
import Icon, { Star } from '../components/Icon';

const rowClass =
  'pp-inset flex min-h-12 items-center gap-3.5 rounded-2xl px-3.5 py-1.5 text-lg md:text-xl';

export default function Contact({ area }: { area: Area }) {
  return (
    <AreaLayout area={area}>
      <main className="mt-[76px] flex flex-col gap-[22px] pb-[110px] md:mt-6 md:grid md:grid-cols-[minmax(0,520px)_minmax(0,620px)] md:items-start md:justify-between md:gap-x-10 md:gap-y-6 md:pb-0">
        <section className="pp-card flex flex-col gap-[18px] rounded-3xl px-5 py-[22px] md:rounded-[30px] md:px-[34px] md:pt-[34px] md:pb-[30px]">
          <div className="flex flex-col gap-2">
            <h1 className="pp-h text-4xl leading-none md:text-[52px] md:leading-[0.95]">
              Send a letter
            </h1>
            <p className="text-lg leading-snug text-inksoft md:text-[21px]">
              Hiring, collaborating, or just want to talk RAG pipelines and
              agents? Drop a line — I read every one.
            </p>
          </div>
          <nav
            aria-label="Other ways to reach Subh"
            className="flex flex-col gap-2.5"
          >
            <span className="pp-h text-[15px] text-primarydeep md:text-base">
              Other routes
            </span>
            {contactLinks.map((link) => {
              const body = (
                <>
                  <span className="pp-badge flex size-8 items-center justify-center rounded-full">
                    <Icon name={link.icon} size={18} />
                  </span>
                  <span className="grow">{link.label}</span>
                  <span className="text-inksoft">{link.detail}</span>
                </>
              );
              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={rowClass}
                >
                  {body}
                </a>
              ) : (
                <div key={link.label} className={rowClass}>
                  {body}
                </div>
              );
            })}
          </nav>
        </section>

        {/* Visual only for now: no delivery is wired up yet. */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="pp-card flex rotate-[0.6deg] flex-col gap-3.5 rounded-[14px] px-[18px] py-6 md:rotate-1 md:gap-4 md:rounded-2xl md:px-[38px] md:py-[34px]"
        >
          <div
            className="pp-inset absolute top-3.5 right-4 flex h-[68px] w-[58px] rotate-4 flex-col items-center justify-center gap-1 rounded-lg outline-3 -outline-offset-7 outline-primary outline-dashed md:top-[22px] md:right-[26px] md:h-[92px] md:w-[78px]"
            aria-hidden="true"
          >
            <Star size={34} />
            <span className="pp-h text-[10px] text-primarydeep max-md:hidden">
              Byte Bay
            </span>
          </div>
          <span className="pp-h text-[28px] leading-none md:text-4xl">
            Dear Subh,
          </span>
          <label className="flex w-[min(420px,70%)] flex-col gap-1.5 text-[15px] text-inksoft md:text-[17px]">
            Your name
            <span className="pp-inset block rounded-[14px]">
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="pp-field"
                placeholder="Traveler's name"
              />
            </span>
          </label>
          <label className="flex flex-col gap-1.5 text-[15px] text-inksoft md:text-[17px]">
            Where should I write back?
            <span className="pp-inset block rounded-[14px]">
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="pp-field"
                placeholder="you@example.com"
              />
            </span>
          </label>
          <label className="flex flex-col gap-1.5 text-[15px] text-inksoft md:text-[17px]">
            Your message
            <span className="pp-inset block rounded-[14px]">
              <textarea
                name="message"
                rows={6}
                className="pp-field resize-none leading-[1.4]"
                placeholder="Tell me about the project, the role, or the idea…"
              />
            </span>
          </label>
          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-lg text-inksoft max-md:hidden">
              — sealed with a stamp
            </span>
            <button
              type="submit"
              className="pp-btn b-success min-h-14 px-7 text-[22px] max-md:w-full md:text-[26px]"
            >
              <Icon name="send" size={20} stroke={2.4} />
              Send letter
            </button>
          </div>
        </form>

        <footer className="flex items-center justify-between gap-4 md:col-span-2">
          <p className="pp-hud rounded-2xl px-[18px] py-2.5 text-[15px] max-md:w-full max-md:text-center md:text-lg">
            Thanks for exploring Byte Bay · © 2026 Subh G.
          </p>
          <a href={href('map')} className="pp-btn b-accent max-md:hidden">
            Play again
          </a>
        </footer>
      </main>
    </AreaLayout>
  );
}
