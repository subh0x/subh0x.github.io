import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const NAVMENU = [
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
    label: 'Blog',
    link: '#',
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVMENU.map((NavItem) => (
          <NavigationMenuItem key={NavItem.label}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={NavItem.link}>{NavItem.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
