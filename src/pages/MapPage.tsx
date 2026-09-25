import { areas, profile, type AreaId } from '../content';
import { href } from '../useHashRoute';
import Icon, { Sparkle } from '../components/Icon';
import { Badge, Tag } from '../components/Paper';
import Scene from '../components/Scene';

export default function MapPage({ visited }: { visited: ReadonlySet<AreaId> }) {
  return (
    <>
      <Scene
        area="map"
        label="A painted seaside town with fields, a winding dirt path and a big tree"
      >
        <svg
          viewBox="0 0 1440 900"
          className="pointer-events-none absolute inset-0 size-full"
          aria-hidden="true"
        >
          <path d="M846 594 L874 594 L884 548 L868 548 Z" fill="#8a5a33" />
          <path
            d="M848 585 L875 585 M851 575 L877 575 M854 566 L879 566 M858 557 L881 557"
            stroke="#5a3a20"
            strokeWidth="1.6"
          />
          <path
            d="M846 594 L846 602 M874 594 L874 602 M868 548 L868 556 M884 548 L884 556"
            stroke="#4a2f18"
            strokeWidth="3"
          />
        </svg>
        {areas.map((a) => (
          <a
            key={a.id}
            href={href(a.id)}
            aria-label={`${a.label}: ${a.place}`}
            className="pointer-events-auto absolute flex origin-bottom flex-col items-center"
            style={{
              left: `${(a.sign.left / 1440) * 100}%`,
              bottom: `${(a.sign.bottom / 900) * 100}%`,
              transform: `translateX(-50%) scale(calc(${a.sign.scale} * var(--ui)))`,
            }}
          >
            <span className="pp-plank flex items-center gap-2 rounded-[10px] py-1.5 pr-3.5 pl-1.5 text-paper">
              <span className="pp-badge flex size-8 items-center justify-center rounded-full text-ink">
                <Icon name={a.icon} size={18} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="pp-h text-[22px]">{a.label}</span>
                <span className="text-[13px] tracking-[1px] opacity-85">
                  {a.place.toUpperCase()}
                </span>
              </span>
            </span>
            <span
              className="w-2 border-l-[3px] border-wood bg-wooddeep"
              style={{ height: a.sign.post }}
            />
            <span className="-mt-1.5 h-3 w-[46px] rounded-full bg-[rgb(25_45_15/0.45)]" />
          </a>
        ))}
      </Scene>
      {/* Pass clicks through empty space to the signposts in the scene behind. */}
      <div className="pointer-events-none relative z-10 flex min-h-dvh flex-col px-4 pt-4 pb-[100px] md:px-9 md:pt-6 md:pb-8">
        <header className="ui-zoom pointer-events-auto flex items-center justify-between gap-4">
          <a
            href={href('map')}
            className="pp-hud flex h-14 items-center gap-3 rounded-[22px] pr-[22px] pl-3 md:h-16"
          >
            <span className="pp-badge flex size-9 items-center justify-center rounded-full md:size-11">
              <Icon name="star" size={22} stroke={2.4} />
            </span>
            <span className="pp-h text-2xl leading-none md:text-[30px]">
              Subh G.
            </span>
          </a>

          <nav
            aria-label="Main"
            className="pp-hud flex h-16 items-center gap-1 rounded-[22px] px-2.5 max-md:hidden"
          >
            {[{ id: 'map' as const, label: 'Map' }, ...areas].map((a) => (
              <a
                key={a.id}
                href={href(a.id)}
                aria-current={a.id === 'map' ? 'page' : undefined}
                className="pp-btn pp-nav-link b-accent min-h-11 rounded-2xl px-5 py-2 text-[19px]"
              >
                {a.label}
              </a>
            ))}
          </nav>

          <div className="pp-hud flex h-16 items-center gap-3.5 rounded-[22px] pr-[18px] pl-2.5 max-lg:hidden">
            <span className="pp-badge pp-h flex size-11 flex-col items-center justify-center rounded-full text-xs leading-none">
              lvl<span className="text-[22px]">3</span>
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="text-base leading-none">~3 yrs XP</span>
              <span className="pp-inset block h-3.5 w-[120px] rounded-lg">
                <span className="pp-bar b-success block h-full w-[62%] rounded-lg" />
              </span>
            </div>
          </div>
          <span className="pp-hud pp-h flex h-14 items-center gap-2.5 rounded-[22px] pr-4 pl-2.5 text-xl md:h-16 md:text-[22px] lg:hidden">
            <span className="pp-badge flex size-9 items-center justify-center rounded-full text-xs md:size-11 md:text-sm">
              lv3
            </span>
            <span>
              {visited.size}/{areas.length}
              <span className="sr-only"> places visited</span>
            </span>
          </span>
        </header>

        <section className="ui-zoom pp-card pointer-events-auto relative mt-12 flex flex-col gap-1.5 rounded-[26px] px-[22px] py-[26px] md:mt-[90px] md:ml-[84px] md:w-[640px] md:gap-2 md:rounded-[30px] md:px-10 md:pt-[34px] md:pb-10 short:mt-11 short:pt-7 short:pb-8 shortwide:ml-0">
          <Tag className="-top-4 -left-2 -rotate-8 md:-top-5 md:-left-[18px] md:-rotate-10">
            Player 1
          </Tag>
          <span className="text-[19px] text-inksoft md:text-2xl tiny:hidden">
            Hey there, traveler
          </span>
          <h1 className="pp-h text-[42px] leading-[0.95] md:text-[68px] short:text-[56px]">
            I'm Subhrajit
          </h1>
          <p className="flex items-center gap-2 text-lg text-primarydeep md:text-[22px]">
            <Sparkle size={14} color="var(--color-primary)" />
            <span className="md:hidden">
              {profile.roles.slice(0, 2).join(' · ')}
            </span>
            <span className="max-md:hidden">{profile.roles.join(' · ')}</span>
            <Sparkle size={14} color="var(--color-info)" />
          </p>
          <p className="mt-1 text-[17px] text-inksoft md:text-[21px] tiny:hidden">
            {profile.tagline}
          </p>
          <div className="mt-3 flex gap-4 md:mt-[22px]">
            <a
              href={href('about')}
              className="pp-btn b-success min-h-[52px] text-[22px] md:min-h-[58px] md:rounded-[20px] md:px-[30px] md:text-[28px]"
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 20 22"
                aria-hidden="true"
              >
                <path d="M2 2 L18 11 L2 20 Z" fill="currentColor" />
              </svg>
              Start journey
            </a>
            <a
              href={href('projects')}
              className="pp-btn b-accent min-h-[58px] rounded-[20px] px-[26px] text-2xl max-md:hidden"
            >
              Skip to projects
            </a>
          </div>
        </section>

        <div className="flex-1" />

        <nav
          aria-label="Places"
          className="ui-zoom pp-card pointer-events-auto hidden flex-col gap-2.5 rounded-[22px] p-3.5 md:portrait:flex"
        >
          <span className="pp-h text-[15px] text-primarydeep">
            Pick a place to explore
          </span>
          <div className="grid grid-cols-4 gap-2">
            {areas.map((a) => (
              <a
                key={a.id}
                href={href(a.id)}
                className="pp-tile flex h-[74px] flex-col items-center justify-center gap-1 rounded-2xl text-sm"
              >
                <Badge area={a} size={30} iconSize={16} />
                {a.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="ui-zoom flex items-end justify-between gap-6 max-md:hidden">
          <div className="pointer-events-auto pp-hud flex w-[360px] items-center gap-3.5 rounded-[22px] px-5 py-3.5 max-lg:hidden portrait:hidden tiny:hidden">
            <span className="pp-badge flex size-[46px] shrink-0 items-center justify-center rounded-full">
              <Icon name="hand" size={24} />
            </span>
            <p className="flex flex-col gap-0.5 text-lg leading-tight">
              <span>Click a signpost to visit</span>
              <span className="text-inksoft">or use the menu up top</span>
            </p>
          </div>

          <div className="pointer-events-auto pp-card flex w-[580px] items-center gap-[18px] rounded-3xl px-6 py-[18px] max-xl:hidden">
            <span className="pp-inset flex size-16 shrink-0 items-center justify-center rounded-[18px]">
              <Icon name="map" size={34} stroke={2} />
            </span>
            <div className="flex flex-col gap-1">
              <span className="pp-h text-lg text-primary">
                Welcome to Byte Bay
              </span>
              <p className="text-[21px] leading-snug">
                Four places to explore. Pick a signpost on the map to start.
              </p>
            </div>
          </div>

          <div className="pointer-events-auto pp-card ml-auto flex w-[300px] flex-col gap-2.5 rounded-[22px] px-[22px] py-[18px]">
            <div className="flex items-center justify-between">
              <span className="pp-h text-[22px]">Today's quest</span>
              <span className="pp-badge pp-h rounded-[10px] px-2.5 py-1 text-[15px]">
                {visited.size} / {areas.length}
              </span>
            </div>
            <span className="text-lg leading-tight">
              Visit every place in Byte Bay
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {areas.map((a) => (
                <span
                  key={a.id}
                  className={`block h-3 rounded-md ${visited.has(a.id) ? 'pp-bar b-success' : 'pp-inset'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
