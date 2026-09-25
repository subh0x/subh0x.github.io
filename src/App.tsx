import { useEffect, useState } from 'react';
import { areas, type AreaId } from './content';
import { useHashRoute } from './useHashRoute';
import MobileNav from './components/MobileNav';
import PaperFilters from './components/PaperFilters';
import About from './pages/About';
import Contact from './pages/Contact';
import MapPage from './pages/MapPage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const pages = {
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
};

export default function App() {
  const route = useHashRoute();
  const area = areas.find((a) => a.id === route);

  // Places visited this session drive the map's "Today's quest" progress.
  const [visited, setVisited] = useState<ReadonlySet<AreaId>>(new Set());
  if (area && !visited.has(area.id)) setVisited(new Set(visited).add(area.id));

  useEffect(() => {
    document.title = area
      ? `${area.place} · Subhrajit Guchait`
      : 'Subhrajit Guchait';
    window.scrollTo(0, 0);
  }, [area]);

  const Page = area && pages[area.id];

  return (
    <>
      <PaperFilters />
      {Page ? (
        <Page key={area.id} area={area} />
      ) : (
        <MapPage visited={visited} />
      )}
      <MobileNav route={route} />
    </>
  );
}
