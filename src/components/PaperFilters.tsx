/** SVG filters that give paper surfaces their torn, hand-cut edges (see index.css). */
export default function PaperFilters() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <filter id="pp-rough" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves={2}
            seed={5}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={7}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="pp-rough-sm" x="-5%" y="-8%" width="110%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06"
            numOctaves={2}
            seed={9}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={3.5}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
