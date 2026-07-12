import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceDetailLayout } from "@/components/sections/service-detail-layout";
import { getServiceBySlug, services } from "@/lib/content/services";
import { createMetadata } from "@/lib/content/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "Our Services", href: "/services" },
          { label: service.title },
        ]}
        image={service.heroImage}
      />
      <ServiceDetailLayout service={service} />
    </>
  );
}
