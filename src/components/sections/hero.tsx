import Link from "next/link";
import { ArrowRight, Globe2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HeroGraphic } from "@/components/sections/hero-graphic";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-gold/10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:grid-cols-2 lg:px-8 lg:pt-24">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-xs font-medium text-gold-foreground dark:text-gold">
              <Sparkles className="size-3.5 text-gold" />
              Trusted analysis across 190+ countries
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Understand the{" "}
              <span className="gold-gradient-text">Financial Systems</span>{" "}
              of the World
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Learn how banking systems, central banks, capital markets,
              taxation, monetary policy, digital currencies and financial
              regulations work across different countries.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="group h-12 w-full px-6 text-base sm:w-auto"
                nativeButton={false}
                render={<Link href="#articles" />}
              >
                Explore Articles
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full px-6 text-base sm:w-auto"
                nativeButton={false}
                render={<Link href="#countries" />}
              >
                <Globe2 className="size-4" />
                Compare Countries
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
          <HeroGraphic />
        </Reveal>
      </div>
    </section>
  );
}
