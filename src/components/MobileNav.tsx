import { areas, type Tone } from '../content';
import { href, type Route } from '../useHashRoute';
import Icon, { type IconName } from './Icon';

/** Inactive icon tint per tone: the tone's deep shade keeps contrast on paper. */
const inactiveTint: Record<Tone | 'b-paper', string> = {
  'b-paper': 'text-inksoft',
  'b-accent': 'text-accentdeep',
  'b-success': 'text-successdeep',
  'b-primary': 'text-primarydeep',
  'b-info': 'text-infodeep',
};

const tabs: {
  route: Route;
  label: string;
  icon: IconName;
  tone: Tone | 'b-paper';
}[] = [
  { route: 'map', label: 'Map', icon: 'map', tone: 'b-paper' },
  ...areas.map((a) => ({
    route: a.id,
    label: a.navLabel,
    icon: a.id === 'projects' ? ('flag' as const) : a.icon,
    tone: a.tone,
  })),
];

/** Bottom tab bar on phones; desktop uses the header nav and area dots instead. */
export default function MobileNav({ route }: { route: Route }) {
  return (
    <nav
      aria-label="Main"
      className="pp-hud fixed inset-x-3 bottom-3.5 z-10 grid h-[72px] grid-cols-5 rounded-3xl p-1.5 md:hidden"
    >
      {tabs.map((tab) => {
        const active = tab.route === route;
        return (
          <a
            key={tab.route}
            href={href(tab.route)}
            aria-current={active ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-0.5 rounded-2xl text-[13px] ${active ? 'text-ink' : 'text-inksoft'}`}
          >
            <span
              className={`flex h-[30px] w-[46px] items-center justify-center rounded-full ${active ? `pp-bar ${tab.tone}` : inactiveTint[tab.tone]}`}
            >
              <Icon name={tab.icon} size={18} stroke={active ? 2.4 : 2.2} />
            </span>
            <span className={active ? 'pp-h text-[12px] tracking-[0.5px]' : ''}>
              {tab.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
