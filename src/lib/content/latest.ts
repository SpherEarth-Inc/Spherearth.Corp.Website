export type LatestItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  image: string;
};

/**
 * Homepage hero “Latest” row — keep to 4 items.
 * Reorder or replace as highlights change.
 */
export const latestItems: LatestItem[] = [
  {
    id: "football-academy",
    title: "SpherEarth Football Academy",
    description:
      "Premium youth football development — built in Toronto, designed for the world.",
    href: "https://football.spherearth.ca",
    external: true,
    image: "/images/service-heroes/football-academy.webp",
  },
  {
    id: "sustainability",
    title: "Sustainability Commitment",
    description:
      "Scaling sustainable synergies across operations, communities, and the environment.",
    href: "/corporate-responsibility/sustainability-commitment",
    image: "/images/cr-heroes/sustainability.webp",
  },
  {
    id: "careers",
    title: "Careers at SpherEarth",
    description:
      "Join a team shaping solutions across multiple sectors.",
    href: "/careers",
    image: "/images/careers-hero.webp",
  },
  {
    id: "news-events",
    title: "News & Events",
    description:
      "Announcements, milestones, and community updates.",
    href: "/blog",
    image: "/images/blog-hero.webp",
  },
];
