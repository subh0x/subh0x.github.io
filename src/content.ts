import type { IconName } from './components/Icon';

export type AreaId = 'about' | 'skills' | 'projects' | 'contact';
export type Tone = 'b-primary' | 'b-accent' | 'b-success' | 'b-info';

export interface Area {
  id: AreaId;
  label: string;
  navLabel: string;
  place: string;
  icon: IconName;
  tone: Tone;
  /** Signpost placement on the 1440×900 map art, in artboard px. */
  sign: { left: number; bottom: number; scale: number; post: number };
}

export const areas: Area[] = [
  {
    id: 'about',
    label: 'About',
    navLabel: 'About',
    place: 'Home Cottage',
    icon: 'person',
    tone: 'b-accent',
    sign: { left: 1290, bottom: 152, scale: 1, post: 64 },
  },
  {
    id: 'skills',
    label: 'Skills',
    navLabel: 'Skills',
    place: 'Training Fields',
    icon: 'sprout',
    tone: 'b-success',
    sign: { left: 600, bottom: 260, scale: 0.9, post: 52 },
  },
  {
    id: 'projects',
    label: 'Projects',
    navLabel: 'Quests',
    place: 'Town Square',
    icon: 'code',
    tone: 'b-primary',
    sign: { left: 1080, bottom: 252, scale: 0.88, post: 50 },
  },
  {
    id: 'contact',
    label: 'Contact',
    navLabel: 'Mail',
    place: 'Harbor Post',
    icon: 'mail',
    tone: 'b-info',
    sign: { left: 826, bottom: 304, scale: 0.82, post: 44 },
  },
];

export const profile = {
  name: 'Subhrajit Guchait',
  handle: '@subh0x',
  roles: ['Software Engineer', 'GenAI Builder', 'Lifelong Learner'],
  tagline: 'Building useful things, one commit at a time.',
  facts: [
    { icon: 'pin', color: 'var(--color-info)', text: 'Based in India' },
    {
      icon: 'briefcase',
      color: 'var(--color-primary)',
      text: 'Senior Associate, PwC India',
    },
    {
      icon: 'clock',
      color: 'var(--color-successdeep)',
      text: '~3 years in the field',
    },
  ] satisfies { icon: IconName; color: string; text: string }[],
  backstory:
    "Started out as a mechanical engineer at Jadavpur University, then re-specced into software on purpose. Today I'm in technology consulting at PwC India, building GenAI and RAG pipelines, FastAPI back ends, React front ends and Office JS add-ins — one of which serves 80K+ users.",
};

export const achievements: {
  title: string;
  detail: string;
  icon: IconName;
  ring: string;
}[] = [
  {
    title: 'First Class',
    detail: 'With Distinction, Mech. Eng., Jadavpur University',
    icon: 'medal',
    ring: 'var(--color-accent)',
  },
  {
    title: '80K+ users',
    detail: 'Served by an enterprise Office add-in',
    icon: 'users',
    ring: 'var(--color-primary)',
  },
  {
    title: 'AZ-900',
    detail: 'Azure Fundamentals certified',
    icon: 'cloud',
    ring: 'var(--color-info)',
  },
  {
    title: 'AI-900',
    detail: 'Azure AI Fundamentals certified',
    icon: 'sparkle',
    ring: 'var(--color-success)',
  },
];

export const sideQuests = [
  'Learning Go',
  'Python internals',
  'On-device AI',
  'Japanese',
  'Game dev',
  'Comic books',
];

export const skillGroups: {
  name: string;
  blurb: string;
  icon: IconName;
  equipped: string[];
  training: string[];
  lockedSlot?: boolean;
}[] = [
  {
    name: 'GenAI Grove',
    blurb: 'AI engineering',
    icon: 'sparkle',
    equipped: ['RAG pipelines', 'LangChain', 'LangGraph agents'],
    training: ['Quantization & distillation', 'On-device AI'],
  },
  {
    name: 'Backend Barn',
    blurb: 'APIs & data',
    icon: 'server',
    equipped: ['Python', 'FastAPI', 'PostgreSQL'],
    training: ['Python internals & async', 'Go microservices'],
  },
  {
    name: 'Frontend Farm',
    blurb: 'Interfaces people use',
    icon: 'monitor',
    equipped: ['React', 'Office JS add-ins', 'Apps at 80K+ user scale'],
    training: [],
  },
  {
    name: 'Cloud Keep',
    blurb: 'Certified on Azure',
    icon: 'cloud',
    equipped: ['AZ-900 · Azure Fundamentals', 'AI-900 · Azure AI Fundamentals'],
    training: [],
    lockedSlot: true,
  },
];

export type QuestKind = 'main' | 'side';

export const questStatusTone: Record<string, Tone> = {
  Shipped: 'b-success',
  'In progress': 'b-accent',
  Planned: 'b-info',
  'Portfolio build': 'b-primary',
};

export const quests: {
  kind: QuestKind;
  status: keyof typeof questStatusTone;
  title: string;
  desc: string;
  tags: string[];
  reward: string;
}[] = [
  {
    kind: 'main',
    status: 'Shipped',
    title: 'Enterprise Office add-in',
    desc: 'An Office JS add-in built in technology consulting at PwC India, now in the hands of 80K+ users across an enterprise.',
    tags: ['Office JS', 'Enterprise'],
    reward: '80K+ users',
  },
  {
    kind: 'side',
    status: 'Portfolio build',
    title: 'Briefer',
    desc: 'Document intelligence you can talk to: multi-turn RAG chat over your PDFs, with answers grounded in the source pages.',
    tags: ['RAG', 'PDFs', 'Chat'],
    reward: 'Talk to any PDF',
  },
  {
    kind: 'main',
    status: 'Planned',
    title: 'Slide agent harness',
    desc: 'An agentic slide generator living inside PowerPoint as an Office.js add-in: describe the deck, and an agent drafts it slide by slide.',
    tags: ['Office.js', 'Agents'],
    reward: 'Decks on autopilot',
  },
  {
    kind: 'side',
    status: 'In progress',
    title: 'subh0x.github.io',
    desc: 'This portfolio, rebuilt as a tiny explorable town you can wander around.',
    tags: ['Web', 'Game UI'],
    reward: "You're in it",
  },
];

/** Links without an href are placeholders shown as plain rows until filled in. */
export const contactLinks: {
  label: string;
  detail: string;
  icon: IconName;
  href?: string;
}[] = [
  {
    label: 'GitHub',
    detail: '@subh0x',
    icon: 'github',
    href: 'https://github.com/subh0x',
  },
  {
    label: 'Blog & notes',
    detail: 'subh0x.github.io',
    icon: 'globe',
    href: 'https://subh0x.github.io',
  },
  { label: 'LinkedIn', detail: '[your profile]', icon: 'briefcase' },
  { label: 'Résumé', detail: 'PDF', icon: 'download' },
];
