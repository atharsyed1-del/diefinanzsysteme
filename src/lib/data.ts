import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Building2,
  LineChart,
  HandCoins,
  Bitcoin,
  Cpu,
  Leaf,
  Receipt,
  Globe,
  FileText,
  Microscope,
  Layers,
} from "lucide-react";

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  { label: "Countries Covered", value: 190, suffix: "+", icon: Globe },
  { label: "Articles", value: 1240, suffix: "+", icon: FileText },
  { label: "Research Papers", value: 340, suffix: "+", icon: Microscope },
  { label: "Topics", value: 25, suffix: "+", icon: Layers },
];

export type Topic = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const topics: Topic[] = [
  {
    title: "Banking Systems",
    description:
      "Commercial banking structures, deposit insurance and credit institutions across regions.",
    icon: Landmark,
  },
  {
    title: "Central Banking",
    description:
      "Mandates, independence and policy tools of the world's central banks.",
    icon: Building2,
  },
  {
    title: "Capital Markets",
    description:
      "Equity, bond and derivatives markets, exchanges and market infrastructure.",
    icon: LineChart,
  },
  {
    title: "Islamic Finance",
    description:
      "Shariah-compliant banking, sukuk and profit-and-loss sharing structures.",
    icon: HandCoins,
  },
  {
    title: "Digital Currency",
    description:
      "Central bank digital currencies, stablecoins and cross-border settlement.",
    icon: Bitcoin,
  },
  {
    title: "FinTech",
    description:
      "Payments innovation, open banking and the platforms reshaping finance.",
    icon: Cpu,
  },
  {
    title: "Sustainable Finance",
    description:
      "Green bonds, ESG disclosure rules and climate-linked capital flows.",
    icon: Leaf,
  },
  {
    title: "Tax Systems",
    description:
      "Corporate, income and consumption tax regimes compared across economies.",
    icon: Receipt,
  },
];

export type Article = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  source: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "How the Federal Reserve Shapes Global Liquidity",
    excerpt:
      "A close look at how U.S. monetary policy decisions ripple through emerging market currencies and capital flows.",
    category: "Central Banking",
    readTime: "9 min read",
    date: "Jul 2026",
    featured: true,
    source: "Reuters",
    href: "https://www.reuters.com/business/finance/",
  },
  {
    title: "Inside the Eurozone's Banking Union",
    excerpt:
      "Why a single currency needed a single supervisor — and where the project still falls short.",
    category: "Banking Systems",
    readTime: "7 min read",
    date: "Jul 2026",
    source: "Financial Times",
    href: "https://www.ft.com/central-banks",
  },
  {
    title: "Sukuk vs. Bonds: Structuring Islamic Debt",
    excerpt:
      "Comparing conventional bond issuance with Shariah-compliant sukuk structures used across the Gulf.",
    category: "Islamic Finance",
    readTime: "6 min read",
    date: "Jun 2026",
    source: "Reuters",
    href: "https://www.reuters.com/world/middle-east/",
  },
  {
    title: "China's Digital Yuan and the Future of Settlement",
    excerpt:
      "What the e-CNY pilot reveals about state-backed digital currency ambitions.",
    category: "Digital Currency",
    readTime: "8 min read",
    date: "Jun 2026",
    source: "Reuters",
    href: "https://www.reuters.com/markets/asia/",
  },
  {
    title: "Singapore's Playbook for FinTech Regulation",
    excerpt:
      "Sandboxes, licensing tiers and the regulatory approach behind Southeast Asia's FinTech hub.",
    category: "FinTech",
    readTime: "5 min read",
    date: "May 2026",
    source: "The Business Times",
    href: "https://www.businesstimes.com.sg/",
  },
  {
    title: "Carbon Pricing and the Rise of Green Capital",
    excerpt:
      "How carbon markets and green bond frameworks are redirecting institutional capital.",
    category: "Sustainable Finance",
    readTime: "7 min read",
    date: "May 2026",
    source: "Reuters",
    href: "https://www.reuters.com/sustainability/",
  },
];

export type InstagramReel = {
  title: string;
  href: string;
};

export const instagramReels: InstagramReel[] = [
  {
    title: "Indian Financial System — Part 1",
    href: "https://www.instagram.com/diefinanzsysteme/reel/DbP2judtdmM/",
  },
  {
    title: "Indian Financial System — Part 2",
    href: "https://www.instagram.com/diefinanzsysteme/reel/DbQI4r5txg3/",
  },
  {
    title: "Indian Financial System — Part 3",
    href: "https://www.instagram.com/diefinanzsysteme/reel/DbQWLDttrpK/",
  },
];

export type CountrySnapshot = {
  name: string;
  flag: string;
  authority: string;
  note: string;
};

export const countrySnapshots: CountrySnapshot[] = [
  {
    name: "United States",
    flag: "🇺🇸",
    authority: "Federal Reserve System",
    note: "World's largest capital markets and reserve currency issuer.",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    authority: "Bundesbank / ECB",
    note: "Anchor economy of the Eurosystem and Europe's export engine.",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    authority: "Bank of Japan",
    note: "Decades of ultra-low rates and yield curve control.",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    authority: "Bank of England",
    note: "Global hub for foreign exchange and cross-border banking.",
  },
  {
    name: "China",
    flag: "🇨🇳",
    authority: "People's Bank of China",
    note: "Managed currency regime and rapidly evolving capital account.",
  },
  {
    name: "India",
    flag: "🇮🇳",
    authority: "Reserve Bank of India",
    note: "Fast-growing digital payments infrastructure and UPI rails.",
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    authority: "Swiss National Bank",
    note: "Safe-haven currency and private banking stronghold.",
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    authority: "Central Bank of the UAE",
    note: "Regional hub for Islamic finance and sovereign capital.",
  },
];
