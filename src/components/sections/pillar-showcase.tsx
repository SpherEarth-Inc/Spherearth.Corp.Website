import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import type { CorporatePillar } from "@/types/content";

interface PillarShowcaseProps {
  pillars: CorporatePillar[];
}

export function PillarShowcase({ pillars }: PillarShowcaseProps) {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="space-y-16 lg:space-y-24">
          {pillars.map((pillar, index) => {
            const imageRight = index % 2 === 1;
            return (
              <div
                key={pillar.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden rounded-2xl",
                    imageRight ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  {pillar.heroImage && (
                    <Image
                      src={pillar.heroImage}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                </div>

                <div className={cn(imageRight ? "lg:order-1" : "lg:order-2")}>
                  <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  <ButtonLink
                    href={`/corporate-responsibility/${pillar.slug}`}
                    className="mt-6 h-auto min-h-[48px] w-fit gap-2 rounded-[2px] px-7 py-3 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
                  >
                    View More
                    <ArrowRight className="size-4 stroke-[2.5]" />
                  </ButtonLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
