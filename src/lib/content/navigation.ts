import type { NavItem } from "@/types/content";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      {
        label: "Environmental Services",
        href: "/services/environmental-services",
      },
      { label: "Logistics", href: "/services/logistics" },
      {
        label: "Project Finance Facilitation Services",
        href: "/services/project-finance-facilitation-services",
      },
      {
        label: "Media & Publishing, Brand",
        href: "/services/media-and-publishing-brand",
      },
      { label: "SpherEarth Fest", href: "/services/spherearth-fest" },
      {
        label: "Food & Agriculture",
        href: "/services/food-and-agriculture",
      },
      {
        label: "Recruitment & Staff Outsourcing",
        href: "/services/recruitment-and-staff-outsourcing",
      },
      {
        label: "Project Management & General Consultancy",
        href: "/services/project-management-and-general-consultancy",
      },
      {
        label: "SpherEarth Football Academy",
        href: "/services/spherearth-football-academy",
      },
    ],
  },
  {
    label: "Corporate Responsibility",
    href: "/corporate-responsibility",
    children: [
      {
        label: "Sustainability Commitment",
        href: "/corporate-responsibility/sustainability-commitment",
      },
      {
        label: "Environmental, Social, and Governance (ESG) Commitment",
        href: "/corporate-responsibility/esg-commitment",
      },
      {
        label: "Diversity, Equity, and Inclusion (DEI) Statement",
        href: "/corporate-responsibility/dei-statement",
      },
      {
        label: "Equal Employment Opportunity (EEO) Policy",
        href: "/corporate-responsibility/eeo-policy",
      },
      {
        label: "Corporate Social Responsibility (CSR) Commitment",
        href: "/corporate-responsibility/csr-commitment",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "News & Events", href: "/blog" },
  { label: "Why Choose Us?", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Translate", href: "/translate" },
];

// Ordered for a two-column, row-major grid so the columns read:
//   About Us / Corporate Responsibility / News & Events / Contact Us / Privacy Policy
//   Our Services / Careers / Why Choose Us? / Translate / Terms of Use
export const footerNavigation = {
  usefulLinks: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/services" },
    { label: "Corporate Responsibility", href: "/corporate-responsibility" },
    { label: "Careers", href: "/careers" },
    { label: "News & Events", href: "/blog" },
    { label: "Why Choose Us?", href: "/why-choose-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Translate", href: "/translate" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};
