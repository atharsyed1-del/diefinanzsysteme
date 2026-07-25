import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ArticlesSection() {
  return (
    <section id="articles" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Featured Articles
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Fresh analysis from around the world
            </h2>
          </div>
          <Button
            variant="outline"
            className="shrink-0"
            nativeButton={false}
            render={<Link href="#" />}
          >
            View all articles
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={(i % 3) * 100}>
              <Link
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5",
                  article.featured && "sm:col-span-2 lg:col-span-1"
                )}
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/70 dark:from-navy dark:to-card">
                  <div className="bg-grid absolute inset-0 opacity-20" />
                  <span className="relative font-heading text-4xl font-semibold text-primary-foreground/20 dark:text-gold/20">
                    DF
                  </span>
                  <Badge className="absolute top-3 left-3 bg-background/90 text-foreground ring-1 ring-border">
                    {article.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-start gap-1.5 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-gold">
                    <span className="flex-1">{article.title}</span>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/70">
                      via {article.source}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
