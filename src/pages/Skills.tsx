import { skillGroups, type Area } from '../content';
import AreaLayout from '../components/AreaLayout';
import Icon from '../components/Icon';
import { NextAreaButton, Sheet } from '../components/Paper';

function EquippedDot() {
  return <span className="pp-bar b-success size-3.5 shrink-0 rounded-full" />;
}

function TrainingDot() {
  return (
    <span className="size-2.5 shrink-0 rounded-full border-[3px] border-dotted border-accentdeep" />
  );
}

export default function Skills({ area }: { area: Area }) {
  return (
    <AreaLayout area={area}>
      <Sheet className="md:gap-6 md:px-10 md:py-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="pp-h text-[30px] leading-none md:text-[38px]">
            Skill tree
          </h1>
          <div className="flex items-center gap-3 text-base md:text-lg">
            <span className="pp-chip flex items-center gap-2 rounded-full px-3.5 py-1.5">
              <EquippedDot />
              Equipped
            </span>
            <span className="flex items-center gap-2 rounded-full border-2 border-dashed border-inksoft px-3.5 py-1 text-inksoft">
              <TrainingDot />
              In training
            </span>
          </div>
        </div>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <section
              key={g.name}
              className="pp-tile flex flex-col gap-3 rounded-[26px] p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="pp-h text-2xl leading-none">{g.name}</h2>
                  <span className="text-base text-inksoft">{g.blurb}</span>
                </div>
                <span className="pp-badge flex size-[42px] shrink-0 items-center justify-center rounded-full">
                  <Icon name={g.icon} size={22} />
                </span>
              </div>
              <ul className="flex flex-col gap-2 text-lg">
                {g.equipped.map((s) => (
                  <li
                    key={s}
                    className="pp-chip flex items-center gap-2.5 rounded-[14px] px-3 py-2"
                  >
                    <EquippedDot />
                    {s}
                  </li>
                ))}
                {g.training.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2.5 rounded-[14px] border-2 border-dashed border-inksoft px-3 py-1.5 text-inksoft"
                  >
                    <TrainingDot />
                    {s}
                    <span className="sr-only">(in training)</span>
                  </li>
                ))}
              </ul>
              {g.lockedSlot && (
                <div className="mt-auto flex flex-col items-center gap-1.5 rounded-2xl border-2 border-dashed border-inksoft p-3.5 text-center text-[17px] text-inksoft">
                  <Icon name="lock" size={26} stroke={2} />
                  Next slot unlocks soon
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-lg text-inksoft md:text-xl">
            Dotted ones are still growing — I train a little every day.
          </span>
          <NextAreaButton from={area} />
        </div>
      </Sheet>
    </AreaLayout>
  );
}
