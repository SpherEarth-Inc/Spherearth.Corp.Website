import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { PillarDetailLayout } from "@/components/sections/pillar-detail-layout";
import {
  corporatePillars,
  getPillarBySlug,
} from "@/lib/content/corporate-responsibility";
import { createMetadata } from "@/lib/content/site";

interface PillarPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return corporatePillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({ params }: PillarPageProps) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};

  return createMetadata({
    title: pillar.title,
    description: pillar.summary,
    path: `/corporate-responsibility/${pillar.slug}`,
  });
}

export default async function PillarPage({ params }: PillarPageProps) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);

  if (!pillar) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={pillar.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          {
            label: "Corporate Responsibility",
            href: "/corporate-responsibility",
          },
          { label: pillar.title },
        ]}
        image={pillar.heroImage}
      />
      <PillarDetailLayout pillar={pillar} />
    </>
  );
}
