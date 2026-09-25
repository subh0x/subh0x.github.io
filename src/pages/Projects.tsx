import { useState } from 'react';
import { questStatusTone, quests, type Area, type QuestKind } from '../content';
import AreaLayout from '../components/AreaLayout';
import Icon, { Star } from '../components/Icon';
import { NextAreaButton, Sheet } from '../components/Paper';

type Filter = 'all' | QuestKind;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'main', label: 'Main' },
  { id: 'side', label: 'Side' },
];

export default function Projects({ area }: { area: Area }) {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = quests.filter((q) => filter === 'all' || q.kind === filter);

  return (
    <AreaLayout area={area}>
      <Sheet className="md:gap-[22px] md:px-10 md:pt-8 md:pb-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <h1 className="pp-h text-[30px] leading-none md:text-[38px]">
              Quest board
            </h1>
            <span className="text-lg text-inksoft">
              Things I've built, shipped or am building next
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <div
              role="group"
              aria-label="Filter quests"
              className="flex gap-2.5"
            >
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`pp-btn ${filter === f.id ? 'b-accent' : 'b-paper'} min-h-11 rounded-[14px] px-[18px] py-2 text-lg`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <NextAreaButton
              from={area}
              className="min-h-11 rounded-[14px] px-[18px] py-2 text-lg max-md:hidden md:ml-2"
            />
          </div>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {shown.map((q) => (
            <li
              key={q.title}
              className="pp-tile flex flex-col gap-2.5 rounded-[26px] px-6 pt-[22px] pb-[18px]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="pp-bar b-ink pp-h rounded-full px-2.5 py-0.5 text-xs text-paper">
                      {q.kind === 'main' ? 'Main quest' : 'Side quest'}
                    </span>
                    <span
                      className={`pp-bar ${questStatusTone[q.status]} rounded-full px-2.5 py-0.5`}
                    >
                      {q.status}
                    </span>
                  </div>
                  <h2 className="pp-h text-[28px] leading-none">{q.title}</h2>
                </div>
                <span className="pp-badge flex size-11 shrink-0 items-center justify-center rounded-full">
                  <Icon name="flag" size={22} />
                </span>
              </div>
              <p className="text-[17px] leading-snug">{q.desc}</p>
              <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
                {q.tags.map((t) => (
                  <li
                    key={t}
                    className="pp-chip rounded-full px-3 py-0.5 text-[15px]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-auto flex items-center gap-1.5 text-base text-primarydeep">
                <Star />
                {q.reward}
              </span>
            </li>
          ))}
        </ul>

        <NextAreaButton from={area} className="self-end md:hidden" />
      </Sheet>
    </AreaLayout>
  );
}
