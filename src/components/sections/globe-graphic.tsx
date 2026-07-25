export function GlobeGraphic() {
  const rows = 14;
  const cols = 28;
  const dots: { x: number; y: number; r: number }[] = [];

  for (let row = 0; row < rows; row++) {
    const v = (row / (rows - 1)) * 2 - 1;
    const rowRadius = Math.sqrt(Math.max(0, 1 - v * v));
    const count = Math.max(3, Math.round(cols * rowRadius));
    for (let col = 0; col < count; col++) {
      const u = (col / count) * 2 * Math.PI;
      const x = 50 + 46 * rowRadius * Math.cos(u);
      const y = 50 + 46 * v;
      dots.push({ x, y, r: 0.55 });
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" className="fill-primary/[0.03] dark:fill-gold/[0.04]" />
      <circle
        cx="50"
        cy="50"
        r="47"
        className="stroke-foreground/10"
        strokeWidth="0.3"
        fill="none"
      />
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          className="fill-primary/30 dark:fill-gold/40"
        />
      ))}
      <ellipse
        cx="50"
        cy="50"
        rx="47"
        ry="16"
        className="stroke-foreground/10"
        strokeWidth="0.25"
        fill="none"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="47"
        ry="32"
        className="stroke-foreground/10"
        strokeWidth="0.25"
        fill="none"
      />
      <line x1="3" y1="50" x2="97" y2="50" className="stroke-foreground/10" strokeWidth="0.25" />
      <line x1="50" y1="3" x2="50" y2="97" className="stroke-foreground/10" strokeWidth="0.25" />
    </svg>
  );
}
