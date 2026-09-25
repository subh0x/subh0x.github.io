import type { ReactNode } from 'react';
import { areas, type Area } from '../content';
import { href } from '../useHashRoute';
import Icon from './Icon';
import Scene from './Scene';

/** Shared frame for the four area pages: backdrop, back-to-map, area sign and area dots. */
export default function AreaLayout({
  area,
  children,
}: {
  area: Area;
  children: ReactNode;
}) {
  const index = areas.indexOf(area) + 1;
  return (
    <>
      <Scene area={area.id} />
      <div className="relative z-10 flex min-h-dvh flex-col">
        <div className="ui-zoom mx-auto flex w-full max-w-[1248px] flex-1 flex-col px-3.5 pt-4 md:px-6 md:pt-[26px] md:pb-12">
          <header className="flex items-center justify-between gap-4">
            <a
              href={href('map')}
              className="pp-btn b-paper w-11 min-h-11 rounded-full p-0 text-lg md:w-auto md:min-h-[46px] md:rounded-[18px] md:py-2 md:pr-5 md:pl-3.5"
            >
              <Icon name="chevron-left" size={18} stroke={2.8} />
              <span className="max-md:sr-only">Map</span>
            </a>
            <div className="pp-plank flex flex-col items-center gap-0.5 rounded-xl px-[18px] py-1.5 text-paper md:rounded-[14px] md:px-9 md:py-2">
              <span className="pp-h text-xl leading-none md:text-[30px]">
                {area.place}
              </span>
              <span className="text-xs tracking-[1.5px] opacity-85 md:text-sm md:tracking-[2px]">
                AREA {index} OF {areas.length}
                <span className="max-md:hidden">
                  {' '}
                  · {area.label.toUpperCase()}
                </span>
              </span>
            </div>
            <nav
              aria-label="Areas"
              className="pp-hud flex items-center gap-2 rounded-full px-4 py-3 max-md:hidden"
            >
              {areas.map((a) => (
                <a
                  key={a.id}
                  href={href(a.id)}
                  aria-label={a.label}
                  aria-current={a === area ? 'page' : undefined}
                  className={`${a === area ? 'pp-badge' : 'pp-inset'} size-5 rounded-full`}
                />
              ))}
            </nav>
            <span className="pp-badge pp-h flex size-11 items-center justify-center rounded-full text-sm md:hidden">
              lv3
            </span>
          </header>
          {children}
        </div>
      </div>
    </>
  );
}
