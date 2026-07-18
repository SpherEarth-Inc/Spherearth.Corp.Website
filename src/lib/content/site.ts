import type { Metadata } from "next";

export const siteConfig = {
  name: "SpherEarth Inc. | SphèreTerre Inc.",
  shortName: "SpherEarth",
  description:
    "SpherEarth Inc. / SphèreTerre Inc. provides holistic solutions across multiple sectors. Explore our services and join us in shaping a better future.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.spherearth.ca",
  ogImage: "/images/og-image.png",
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
}): Metadata {
  const fullTitle =
    title === "Home" ? siteConfig.name : `${title} – ${siteConfig.name}`;
  const pageDescription = description ?? siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: pageDescription,
    icons: {
      icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.shortName,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
  };
}
