export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--gold)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle
        cx="320"
        cy="320"
        r="230"
        stroke="url(#ringGrad)"
        strokeWidth="1"
        className="animate-float-slow"
        style={{ transformOrigin: "320px 320px" }}
      />
      <circle
        cx="320"
        cy="320"
        r="170"
        stroke="currentColor"
        className="text-foreground/10"
        strokeWidth="1"
        strokeDasharray="2 8"
      />

      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const r = 230;
        const x = 320 + r * Math.cos(angle);
        const y = 320 + r * Math.sin(angle);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 6 === 0 ? 3 : 1.6}
            className={i % 6 === 0 ? "fill-gold" : "fill-foreground/15"}
          />
        );
      })}

      <g className="text-primary/70 dark:text-gold/80">
        <path
          d="M60 420 L150 380 L220 410 L300 320 L370 360 L440 260 L520 300 L580 200"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={240}
          strokeDasharray="240"
          className="animate-ticker-line"
        />
      </g>

      {[
        { x: 150, y: 380, w: 10, h: 42, up: false },
        { x: 220, y: 410, w: 10, h: 30, up: true },
        { x: 300, y: 320, w: 10, h: 58, up: true },
        { x: 370, y: 360, w: 10, h: 26, up: false },
        { x: 440, y: 260, w: 10, h: 46, up: true },
        { x: 520, y: 300, w: 10, h: 34, up: false },
      ].map((bar, i) => (
        <rect
          key={i}
          x={bar.x - bar.w / 2}
          y={bar.up ? bar.y - bar.h : bar.y}
          width={bar.w}
          height={bar.h}
          rx="2"
          className={
            bar.up
              ? "fill-gold/70 animate-float-slower"
              : "fill-primary/40 dark:fill-foreground/20 animate-float-slower"
          }
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}

      <circle cx="320" cy="320" r="3.5" className="fill-gold animate-pulse-glow" />
      <circle cx="460" cy="180" r="5" className="fill-gold/70 animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
      <circle cx="140" cy="460" r="4" className="fill-primary/60 dark:fill-gold/50 animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </svg>
  );
}
