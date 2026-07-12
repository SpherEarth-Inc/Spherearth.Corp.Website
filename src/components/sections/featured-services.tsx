import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/sections/service-card";
import { ButtonLink } from "@/components/ui/button-link";
import type { Service } from "@/types/content";

interface FeaturedServicesProps {
  services: Service[];
  title?: string;
  description?: string;
}

export function FeaturedServices({
  services,
  title = "Featured Services",
  description = "At SpherEarth Inc. | SphèreTerre Inc., we offer a comprehensive range of services designed to drive sustainable growth, operational efficiency, and community impact.",
}: FeaturedServicesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center lg:pr-4">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-[2.5rem]">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
            <ButtonLink
              href="/services"
              className="mt-8 h-auto min-h-[52px] w-fit gap-2 rounded-[2px] px-8 py-3.5 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
            >
              View All Services
              <ArrowRight className="size-4 stroke-[2.5]" />
            </ButtonLink>
          </div>

          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
