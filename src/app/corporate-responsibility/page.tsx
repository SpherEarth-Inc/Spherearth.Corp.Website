import { PageHero } from "@/components/layout/page-hero";
import { PillarShowcase } from "@/components/sections/pillar-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";
import { corporatePillars } from "@/lib/content/corporate-responsibility";
import { corporateResponsibilityIndexContent } from "@/lib/content/pages";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Corporate Responsibility",
  description: corporateResponsibilityIndexContent.intro,
  path: "/corporate-responsibility",
});

export default function CorporateResponsibilityPage() {
  return (
    <>
      <PageHero
        title={corporateResponsibilityIndexContent.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "Corporate Responsibility" },
        ]}
        image="/images/cr-heroes/cr-index-hero.webp"
      />

      <section className="section-padding pb-0">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed">
            <p className="text-lg font-semibold text-foreground">
              {corporateResponsibilityIndexContent.intro}
            </p>

            <div>
              <p className="text-muted-foreground">
                {corporateResponsibilityIndexContent.pillarsIntro}
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-6 text-muted-foreground">
                {corporateResponsibilityIndexContent.keyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ol>
            </div>

            <p className="text-muted-foreground">
              {corporateResponsibilityIndexContent.closing}
            </p>
          </div>
        </div>
      </section>

      <PillarShowcase pillars={corporatePillars} />

      <CtaBanner
        title="Committed to making a difference"
        description="Explore how SpherEarth brings corporate responsibility to life in our daily operations and long-term strategies."
        primaryLabel="Contact Us"
        primaryHref="/contact-us"
        secondaryLabel="About Us"
        secondaryHref="/about-us"
      />
    </>
  );
}
