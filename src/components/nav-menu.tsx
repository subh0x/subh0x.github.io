'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NoiseBackground } from '@/components/ui/noise-background';
import { cn } from '@/lib/utils';

const NAVMENU = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Projects',
    link: '/#',
  },
  {
    label: 'Resume',
    link: '/#',
  },
  {
    label: 'Blog',
    link: '/#',
  },
];

export function NavMenu() {
  const pathname = usePathname();

  return (
    <NoiseBackground
      containerClassName="w-fit rounded-md p-1"
      className="rounded-md bg-background p-1"
      gradientColors={[
        'rgb(159, 193, 255)',
        'rgb(100, 150, 255)',
        'rgb(43, 67, 207)',
      ]}
    >
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {NAVMENU.map((NavItem) => {
            // const isActive = pathname === NavItem.link;

            return (
              <NavigationMenuItem key={NavItem.label}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'text-md font-serif scale-x-[1.1] origin-left',
                    // isActive &&
                    // 'bg-foreground text-background hover:bg-foreground/90 focus:bg-foreground/90 scale-x-[1.2]'
                  )}
                >
                  <Link href={NavItem.link}>{NavItem.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </NoiseBackground >
  );
}
