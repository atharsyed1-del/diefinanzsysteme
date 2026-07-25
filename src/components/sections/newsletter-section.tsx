"use client";

import * as React from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    toast.success("You're on the list.", {
      description: `We'll send new research to ${email}.`,
    });
    setEmail("");
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-primary/85 px-6 py-14 text-center dark:from-navy dark:to-card sm:px-16 sm:py-20">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-pulse-glow" />

        <div className="relative mx-auto flex max-w-lg flex-col items-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30">
            <Mail className="size-5" />
          </span>
          <h2 className="mt-6 text-balance font-heading text-2xl font-semibold tracking-tight text-primary-foreground sm:text-3xl">
            Stay ahead of global financial shifts
          </h2>
          <p className="mt-3 text-balance text-sm text-primary-foreground/70 sm:text-base">
            Join analysts and researchers who get our weekly breakdown of
            monetary policy, regulation and market structure — no spam, ever.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-gold focus-visible:ring-gold/40"
            />
            <Button type="submit" size="lg" className="h-11 shrink-0">
              Subscribe
            </Button>
          </form>

          <p className="mt-4 flex items-center gap-1.5 text-xs text-primary-foreground/60">
            <ShieldCheck className="size-3.5" />
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
