export const siteConfig = {
  name: "SpherEarth Inc. | SphèreTerre Inc.",
  shortName: "SpherEarth",
  description:
    "SpherEarth Inc. / SphèreTerre Inc. provides holistic solutions across multiple sectors. Explore our services and join us in shaping a better future.",
  url: "https://www.spherearth.ca",
  contact: {
    email: "info@spherearth.ca",
    phone: "+1 647 936 2784",
    address: "First Canadian Place, 100 King Street West, Suite 5600",
    city: "Toronto, ON M5X 1C9",
    hours: "Monday to Friday 10:00am to 5:00pm",
  },
  social: {
    email: "info@spherearth.ca",
  },
  socialLinks: [
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/1SpherEarth",
    },
    { platform: "x", label: "X", href: "https://x.com/1SpherEarth" },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/1SpherEarth",
    },
    {
      platform: "threads",
      label: "Threads",
      href: "https://www.threads.net/@1spherearth",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@1spherearth",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/1spherearth",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@1SpherEarth",
    },
  ],
} as const;

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  const fullTitle =
    title === "Home" ? siteConfig.name : `${title} – ${siteConfig.name}`;

  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
    openGraph: {
      title: fullTitle,
      description: description ?? siteConfig.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.shortName,
      locale: "en_CA",
      type: "website" as const,
    },
  };
}
