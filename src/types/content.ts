export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  featured?: boolean;
  image?: string;
  heroImage?: string;
  /** Optional external site CTA shown on the service detail page. */
  externalUrl?: string;
  externalLabel?: string;
}

export interface CorporatePillar {
  slug: string;
  title: string;
  summary: string;
  description: string;
  heroImage?: string;
  sections?: { title: string; items: string[] }[];
}

export interface AcronymValue {
  letter: string;
  title: string;
  description: string;
}

export interface WhyChooseReason {
  title: string;
  description: string;
}

export interface CareerBenefit {
  title: string;
  description: string;
}
