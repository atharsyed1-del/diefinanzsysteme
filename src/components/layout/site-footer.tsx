import Link from "next/link";
import { Mail, Rss, MessageCircle } from "lucide-react";

import { InstagramIcon } from "@/components/icons/instagram-icon";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Articles", href: "#articles" },
      { label: "Countries", href: "#countries" },
      { label: "Financial Systems", href: "#topics" },
      { label: "Research", href: "#stats" },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "Central Banking", href: "#topics" },
      { label: "Capital Markets", href: "#topics" },
      { label: "Islamic Finance", href: "#topics" },
      { label: "Digital Currency", href: "#topics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#footer" },
      { label: "Editorial Standards", href: "#footer" },
      { label: "Careers", href: "#footer" },
      { label: "Contact", href: "#footer" },
    ],
  },
];

const socials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/diefinanzsysteme/",
  },
  { icon: MessageCircle, label: "Discussion", href: "#" },
  { icon: Rss, label: "RSS feed", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-border bg-secondary/40 dark:bg-navy"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Die Finanzsysteme. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-gold">
              Terms of Use
            </Link>
            <Link href="#" className="transition-colors hover:text-gold">
              Editorial Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
