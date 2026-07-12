import type { MetadataRoute } from "next";
import { corporatePillars } from "@/lib/content/corporate-responsibility";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/corporate-responsibility",
    "/careers",
    "/why-choose-us",
    "/contact-us",
    "/translate",
    "/blog",
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const pillarRoutes = corporatePillars.map(
    (p) => `/corporate-responsibility/${p.slug}`
  );

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...pillarRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
