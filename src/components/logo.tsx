import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 font-heading",
        className
      )}
      aria-label="Die Finanzsysteme — home"
    >
      <span className="relative flex size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.jpg"
          alt=""
          fill
          sizes="36px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-tight text-foreground sm:text-base">
          Die Finanzsysteme
        </span>
        <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
          Global Financial Intelligence
        </span>
      </span>
    </Link>
  );
}
