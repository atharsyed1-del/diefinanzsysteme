export const siteConfig = {
  name: "Die Finanzsysteme",
  shortName: "Die Finanzsysteme",
  description:
    "Learn how banking systems, central banks, capital markets, taxation, monetary policy, digital currencies and financial regulations work across different countries.",
  tagline: "Understand the Financial Systems of the World",
  url: "https://www.diefinanzsysteme.com",
  keywords: [
    "financial systems",
    "central banking",
    "banking systems by country",
    "capital markets",
    "monetary policy",
    "Islamic finance",
    "digital currency",
    "fintech",
    "tax systems",
    "financial regulation",
  ],
  links: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#articles" },
  { label: "Countries", href: "#countries" },
  { label: "Financial Systems", href: "#topics" },
  { label: "Research", href: "#stats" },
  { label: "About", href: "#footer" },
  { label: "Contact", href: "#footer" },
];
