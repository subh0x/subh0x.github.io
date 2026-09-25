import type { ReactNode } from 'react';
import type { Route } from '../useHashRoute';

interface SceneProps {
  area: Route;
  label?: string;
  /** Desktop-only overlays positioned in % of the 1440×900 map art. */
  children?: ReactNode;
}

/** Fixed painted-town backdrop; crop and blur per area are set in index.css. */
export default function Scene({ area, label, children }: SceneProps) {
  return (
    <div className="scene" data-area={area}>
      <div
        className="scene-art"
        {...(label
          ? { role: 'img', 'aria-label': label }
          : { 'aria-hidden': true })}
      />
      {children && <div className="scene-stage">{children}</div>}
    </div>
  );
}
