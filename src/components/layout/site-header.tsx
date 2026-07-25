"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/85 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/70"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="text-foreground/70 hover:text-foreground"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-[1.1rem]" />
          </Button>

          <ThemeToggle />

          <Button
            className="ml-1 hidden sm:inline-flex"
            size="sm"
            nativeButton={false}
            render={<Link href="#articles" />}
          >
            Explore Articles
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="lg:hidden"
                />
              }
            >
              <Menu className="size-[1.15rem]" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-6">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.label}
                    nativeButton={false}
                    render={<Link href={item.href} />}
                  >
                    <span className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground">
                      {item.label}
                    </span>
                  </SheetClose>
                ))}
                <Button
                  className="mt-3"
                  nativeButton={false}
                  render={<Link href="#articles" />}
                >
                  Explore Articles
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Die Finanzsysteme</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="Search articles, countries, topics…"
              className="pl-9"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Try “central bank independence”, “sukuk”, or “Germany”.
          </p>
        </DialogContent>
      </Dialog>
    </header>
  );
}
