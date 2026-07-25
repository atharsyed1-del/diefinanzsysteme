import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { topics } from "@/lib/data";

export function TopicsSection() {
  return (
    <section id="topics" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Featured Topics
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The building blocks of every financial system
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          Explore the core pillars we cover in depth, from monetary policy to
          the rise of digital assets.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, i) => (
          <Reveal key={topic.title} delay={(i % 4) * 90}>
            <Link
              href="#articles"
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold dark:bg-gold/10 dark:text-gold">
                <topic.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
              <ArrowUpRight className="absolute top-6 right-6 size-4 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold group-hover:opacity-100" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
