"use client";

import * as React from "react";
import { Play } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function VideoSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setPlaying(true);
  }

  return (
    <section id="video" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Watch
        </span>
        <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Die Finanzsysteme in a minute
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          A quick look at how we break down the world&apos;s financial
          systems — from central banks to capital markets.
        </p>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-12 max-w-xs sm:max-w-sm">
        <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 ring-1 ring-foreground/5 dark:shadow-black/40">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src="/videos/intro.mp4"
            controls={playing}
            playsInline
            preload="metadata"
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/10 to-black/30 transition-opacity duration-300 hover:from-black/60"
            >
              <span
                className={cn(
                  "flex size-16 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform duration-300 group-hover:scale-110",
                  "ring-4 ring-gold/25"
                )}
              >
                <Play className="ml-1 size-6 fill-current" />
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
