import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { FeaturedServices } from "@/components/sections/featured-services";
import { IdentityTabs } from "@/components/sections/identity-tabs";
import { ValuesAcronym } from "@/components/sections/values-acronym";
import { ButtonLink } from "@/components/ui/button-link";
import { SocialLinks } from "@/components/ui/social-links";
import { aboutContent } from "@/lib/content/pages";
import { getFeaturedServices } from "@/lib/content/services";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about SpherEarth Inc. / SphèreTerre Inc. — a Canadian corporation dedicated to scaling sustainable synergies across multiple sectors.",
  path: "/about-us",
});

export default function AboutPage() {
  const { corporateOverview, identity, values, team } = aboutContent;
  const featuredServices = getFeaturedServices();

  return (
    <>
      <PageHero
        title={aboutContent.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "About Us" },
        ]}
        image={aboutContent.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:order-1 lg:sticky lg:top-28">
              <Image
                src={corporateOverview.image}
                alt="Toronto cityscape with globe sculpture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                {corporateOverview.eyebrow}
              </p>
              <div className="mt-4 space-y-5 text-base leading-relaxed text-muted-foreground">
                {corporateOverview.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <IdentityTabs tabs={identity} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesAcronym
        values={aboutContent.acronymValues}
        eyebrow={values.eyebrow}
        intro={values.intro}
        image={values.image}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">{team.title}</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                {team.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <ButtonLink
                href="/careers"
                className="mt-8 h-auto min-h-[52px] w-fit gap-2 rounded-[2px] px-8 py-3.5 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
              >
                Join Our Team
                <ArrowRight className="size-4 stroke-[2.5]" />
              </ButtonLink>

              <div className="mt-10">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Stay Connected:
                  </span>{" "}
                  Follow us on social media.
                </p>
                <SocialLinks className="mt-3" />
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-[5/4]">
              <Image
                src={team.image}
                alt="SpherEarth team environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedServices services={featuredServices} title="Our Services" />
    </>
  );
}
