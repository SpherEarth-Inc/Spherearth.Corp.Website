export type NewsPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
};

/**
 * Mock news until a CMS/API is wired up.
 * Replace this list (or fetch from an API) when news is live.
 */
export const mockNewsPosts: NewsPost[] = [
  {
    id: "football-academy-launch",
    title: "SpherEarth Football Academy opens pathways for Toronto youth",
    excerpt:
      "Our academy brings elite coaching, character development, and global opportunities to ambitious young athletes and families.",
    date: "2026-07-10",
    category: "Football Academy",
    image: "/images/service-heroes/football-academy.webp",
    href: "/blog",
  },
  {
    id: "sustainability-update",
    title: "Advancing our Sustainability Commitment across operations",
    excerpt:
      "SpherEarth continues to scale sustainable synergies — from environmental services to community partnerships across Ontario.",
    date: "2026-06-22",
    category: "Corporate Responsibility",
    image: "/images/cr-heroes/sustainability.webp",
    href: "/blog",
  },
  {
    id: "community-outreach",
    title: "Community partnerships strengthen our Toronto footprint",
    excerpt:
      "New collaborations with local organizations reinforce our commitment to inclusive growth and lasting community impact.",
    date: "2026-05-15",
    category: "News",
    image: "/images/blog-hero.webp",
    href: "/blog",
  },
  {
    id: "careers-growth",
    title: "We’re hiring — grow your career with SpherEarth",
    excerpt:
      "Join a Canadian team delivering holistic solutions across environmental services, logistics, consultancy, and more.",
    date: "2026-04-28",
    category: "Careers",
    image: "/images/careers-hero.webp",
    href: "/blog",
  },
];

function formatNewsDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

export function getMockNewsPosts() {
  return mockNewsPosts.map((post) => ({
    ...post,
    displayDate: formatNewsDate(post.date),
  }));
}
