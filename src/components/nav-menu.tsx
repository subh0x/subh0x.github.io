'use client';

import Link from 'next/link';

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
    label: 'Blog',
    link: '/blog',
  },
];

export function NavMenu() {
  return (
    <div className="flex flex-row items-center justify-around">
      <NoiseBackground
        containerClassName="w-fit rounded-md p-1"
        className="rounded-md bg-background p-1"
      >
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {NAVMENU.map((NavItem) => {
              return (
                <NavigationMenuItem key={NavItem.label}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-md font-serif scale-x-[1.1] origin-left'
                    )}
                  >
                    <Link href={NavItem.link}>{NavItem.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </NoiseBackground>
    </div>
  );
}
