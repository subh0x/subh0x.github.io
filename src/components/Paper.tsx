import type { ReactNode } from 'react';
import { areas, type Area } from '../content';
import { href } from '../useHashRoute';
import Icon from './Icon';

/** Tilted sticker label pinned to a card's corner. */
export function Tag({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`pp-btn b-primary pointer-events-none absolute min-h-[30px] rounded-xl px-3.5 py-1.5 text-sm md:min-h-9 md:px-[18px] md:text-lg ${className}`}
    >
      {children}
    </span>
  );
}

/** Round icon badge in an area's tone. */
export function Badge({
  area,
  size = 32,
  iconSize = 18,
}: {
  area: Pick<Area, 'icon' | 'tone'>;
  size?: number;
  iconSize?: number;
}) {
  return (
    <span
      className={`pp-bar ${area.tone} flex shrink-0 items-center justify-center rounded-full`}
      style={{ width: size, height: size }}
    >
      <Icon name={area.icon} size={iconSize} />
    </span>
  );
}

/** "Next: <place>" call to action that walks to the following area. */
export function NextAreaButton({
  from,
  className = '',
}: {
  from: Area;
  className?: string;
}) {
  const next = areas[areas.indexOf(from) + 1];
  if (!next) return null;
  return (
    <a href={href(next.id)} className={`pp-btn b-success ${className}`}>
      Next: {next.place}
      <Icon name="chevron-right" size={18} stroke={2.8} />
    </a>
  );
}

/** An area's main card: a sheet over the scene on mobile, a floating card on desktop. */
export function Sheet({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`pp-card -mx-3.5 mt-[150px] flex flex-1 flex-col gap-5 rounded-t-[28px] px-[18px] pt-[26px] pb-[120px] md:mx-0 md:mt-6 md:flex-none md:rounded-[34px] md:p-10 ${className}`}
    >
      {children}
    </main>
  );
}
