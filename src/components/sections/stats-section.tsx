import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section id="stats" className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center">
              <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/5 text-primary dark:bg-gold/10 dark:text-gold">
                <stat.icon className="size-5" />
              </div>
              <p className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
