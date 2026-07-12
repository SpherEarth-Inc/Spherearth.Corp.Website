import { PageHero } from "@/components/layout/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { servicesIndexContent } from "@/lib/content/pages";
import { services } from "@/lib/content/services";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Our Services",
  description: servicesIndexContent.intro,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={servicesIndexContent.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "Our Services" },
        ]}
        image="/images/services-hero.webp"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            {servicesIndexContent.intro}
          </p>

          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
