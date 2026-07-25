import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GlobeGraphic } from "@/components/sections/globe-graphic";
import { countrySnapshots } from "@/lib/data";

export function CountriesSection() {
  return (
    <section id="countries" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 mx-auto aspect-square w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="animate-float-slow absolute inset-0" style={{ animationDuration: "14s" }}>
            <GlobeGraphic />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              World Map Preview
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              190+ financial systems, one clear view
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              From the Federal Reserve to the People&apos;s Bank of China,
              explore how monetary authorities, banking structures and
              capital markets differ from country to country.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {countrySnapshots.map((country, i) => (
              <Reveal key={country.name} delay={(i % 4) * 80}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5 transition-colors duration-300 hover:border-gold/40">
                  <span className="text-xl leading-none">{country.flag}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {country.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {country.authority}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Button
              className="mt-8"
              nativeButton={false}
              render={<Link href="#" />}
            >
              Compare Countries
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
