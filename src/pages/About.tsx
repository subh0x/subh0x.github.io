import { achievements, profile, sideQuests, type Area } from '../content';
import { href } from '../useHashRoute';
import AreaLayout from '../components/AreaLayout';
import Icon, { Sparkle, Star } from '../components/Icon';
import { NextAreaButton, Sheet, Tag } from '../components/Paper';

export default function About({ area }: { area: Area }) {
  return (
    <AreaLayout area={area}>
      <Sheet className="md:grid md:grid-cols-[380px_4px_minmax(0,1fr)] md:gap-9 md:px-11">
        <Tag className="-top-4 left-3.5 -rotate-6 md:left-[-16px] md:-top-[18px] md:-rotate-10">
          Player card
        </Tag>

        <section className="flex flex-col gap-3.5">
          <div className="mt-1.5 flex items-start justify-between gap-3 md:mt-0">
            <div className="flex flex-col gap-1">
              <h1 className="pp-h text-[30px] leading-none md:text-[40px] md:leading-[0.95]">
                {profile.name}
              </h1>
              <span className="flex items-center gap-1.5 text-lg text-primarydeep md:text-xl">
                <span className="max-md:hidden">
                  <Sparkle color="var(--color-primary)" />
                </span>
                {profile.roles[0]}
                <span className="md:hidden">· {profile.handle}</span>
                <span className="max-md:hidden">
                  <Sparkle color="var(--color-info)" />
                </span>
              </span>
            </div>
            <Star size={40} className="shrink-0 rotate-12" />
          </div>

          <div className="pp-inset flex h-[170px] flex-col items-center justify-center gap-2 rounded-3xl text-inksoft md:h-[200px]">
            <Icon name="camera" size={44} stroke={1.8} />
            <span className="text-lg">[Your photo or avatar]</span>
          </div>

          <div className="pp-inset flex flex-col gap-2.5 rounded-3xl px-[18px] py-4 text-lg md:px-[22px] md:py-[18px] md:text-[19px]">
            <span className="pp-h text-xl max-md:hidden">{profile.handle}</span>
            {profile.facts.map((f) => (
              <span key={f.text} className="flex items-center gap-3">
                <Icon name={f.icon} size={22} stroke={2.4} color={f.color} />
                {f.text}
              </span>
            ))}
          </div>
        </section>

        <span className="w-1 rounded-sm bg-edge opacity-80 max-md:hidden" />

        <section className="flex min-w-0 flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="pp-h text-[26px]">Backstory</h2>
            <p className="text-lg leading-snug md:text-xl">
              {profile.backstory}
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="pp-h text-[26px]">Achievements</h2>
            <ul className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="pp-tile flex flex-col gap-2 rounded-[20px] p-3.5"
                >
                  <span className="pp-h min-h-8 text-[15px] leading-[1.05]">
                    {a.title}
                  </span>
                  <span
                    className="pp-inset flex h-[58px] items-center justify-center rounded-[14px]"
                    style={{ boxShadow: `inset 0 0 0 3px ${a.ring}` }}
                  >
                    <Icon name={a.icon} size={30} stroke={2} />
                  </span>
                  <span className="text-[15px] leading-tight">{a.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="pp-h text-[26px]">Side quests</h2>
            <ul className="flex flex-wrap gap-2 text-[17px]">
              {sideQuests.map((q) => (
                <li key={q} className="pp-chip rounded-full px-3.5 py-1">
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap justify-end gap-3.5">
            <a href={href('contact')} className="pp-btn b-accent">
              Say hello
            </a>
            <NextAreaButton from={area} />
          </div>
        </section>
      </Sheet>
    </AreaLayout>
  );
}
