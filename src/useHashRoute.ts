import { useSyncExternalStore } from 'react';
import { areas, type AreaId } from './content';

export type Route = 'map' | AreaId;

const areaIds = new Set<string>(areas.map((a) => a.id));

function readRoute(): Route {
  const path = window.location.hash.replace(/^#\/?/, '');
  return areaIds.has(path) ? (path as AreaId) : 'map';
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

export function useHashRoute(): Route {
  return useSyncExternalStore(subscribe, readRoute);
}

export function href(route: Route) {
  return route === 'map' ? '#/' : `#/${route}`;
}
