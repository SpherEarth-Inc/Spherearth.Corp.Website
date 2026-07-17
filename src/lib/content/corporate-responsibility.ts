import type { CorporatePillar } from "@/types/content";

export const corporatePillars: CorporatePillar[] = [
  {
    slug: "sustainability-commitment",
    title: "Sustainability Commitment",
    summary:
      "Driving innovation and responsibility for a sustainable future.",
    description:
      "At SpherEarth Inc. | SphèreTerre Inc., sustainability is at the heart of everything we do. As a new business, we are committed to building our operations on a foundation of environmental stewardship, social responsibility, and economic sustainability. We aim to create scalable solutions that benefit our clients, communities, and the planet while fostering long-term growth and innovation.",
    heroImage: "/images/cr-heroes/sustainability.webp",
    sections: [
      {
        title: "Environmental Responsibility",
        items: [
          "We prioritize practices that minimize our environmental footprint, including waste reduction, recycling, and resource-efficient operations.",
          "Our Environmental Services department is committed to creating cleaner, greener communities through initiatives like sustainable waste management, recycling programs, and eco-friendly cleaning practices.",
        ],
      },
      {
        title: "Social Equity and Inclusion",
        items: [
          "We strive to engage with diverse communities and prioritize inclusivity in our workforce, partnerships, and projects.",
          "We are dedicated to working respectfully with Indigenous communities, incorporating traditional knowledge where appropriate, and supporting initiatives that empower underrepresented groups.",
        ],
      },
      {
        title: "Economic Growth with Purpose",
        items: [
          "Our business model emphasizes scalability and innovation, focusing on sustainable growth that creates value for all stakeholders.",
          "We seek to collaborate with like-minded partners and clients who share our commitment to sustainability.",
        ],
      },
      {
        title: "Our Future Goals",
        items: [
          "Develop measurable sustainability benchmarks to track and improve our impact.",
          "Seek certifications that align with our values, such as ISO 14001 for environmental management.",
          "Partner with organizations and initiatives that support sustainability and climate action.",
          "Innovate and invest in green technologies and sustainable practices across all sectors of our operations.",
        ],
      },
    ],
  },
  {
    slug: "esg-commitment",
    title: "Environmental, Social, and Governance (ESG) Commitment",
    summary:
      "Upholding transparency, ethical practices, and long-term value creation.",
    description:
      "At SpherEarth Inc. | SphèreTerre Inc., we are dedicated to embedding Environmental, Social, and Governance (ESG) principles into our business operations and decision making processes. Our ESG commitment reflects our belief that responsible practices drive long-term value for our stakeholders, communities, and the planet. We integrate environmental stewardship, social responsibility, and strong governance into every aspect of our operations.",
    heroImage: "/images/cr-heroes/esg.webp",
  },
  {
    slug: "dei-statement",
    title: "Diversity, Equity, and Inclusion (DEI) Statement",
    summary:
      "Building an inclusive workplace that values every individual.",
    description:
      "At SpherEarth Inc. | SphèreTerre Inc., we celebrate diversity, promote equity, and foster inclusion in every aspect of our business. We believe that our strength lies in the variety of perspectives, experiences, and backgrounds that our team, clients, and stakeholders bring to the table. We are committed to creating an environment where everyone feels valued, respected, and empowered to contribute their best.",
    heroImage: "/images/cr-heroes/dei.webp",
  },
  {
    slug: "eeo-policy",
    title: "Equal Employment Opportunity (EEO) Policy",
    summary: "Ensuring fairness and opportunity for all employees.",
    description:
      "SpherEarth Inc. | SphèreTerre Inc. is committed to fostering a workplace that promotes equal employment opportunities for all individuals. We believe that diversity and inclusion strengthen our organization, and we are dedicated to providing an environment where everyone has a fair chance to succeed, regardless of their background or identity. We prohibit discrimination in all employment practices and actively promote equitable hiring, promotion, and development opportunities.",
    heroImage: "/images/cr-heroes/eeo.webp",
  },
  {
    slug: "csr-commitment",
    title: "Corporate Social Responsibility (CSR) Commitment",
    summary:
      "Giving back through community engagement and impactful initiatives.",
    description:
      "At SpherEarth Inc. | SphèreTerre Inc., our Corporate Social Responsibility (CSR) philosophy is rooted in creating positive and lasting impacts on the communities we serve. As a purpose-driven organization, we prioritize initiatives that uplift the vulnerable, empower our employees to give back, and contribute to a sustainable future. We believe in making a meaningful difference beyond business operations through volunteerism, community partnerships, and charitable engagement.",
    heroImage: "/images/cr-heroes/csr.webp",
  },
];

export function getPillarBySlug(slug: string): CorporatePillar | undefined {
  return corporatePillars.find((p) => p.slug === slug);
}
