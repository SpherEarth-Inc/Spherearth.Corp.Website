import { PageHero } from "@/components/layout/page-hero";
import { whyChooseContent } from "@/lib/content/pages";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Why Choose Us?",
  description:
    "Discover why SpherEarth Inc. | SphèreTerre Inc. is the right partner for sustainable, people-centered solutions across multiple sectors.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title={whyChooseContent.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "Why Choose Us?" },
        ]}
        image={whyChooseContent.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-base leading-relaxed text-foreground">
              {whyChooseContent.intro}
            </p>

            {whyChooseContent.reasons.map((reason, index) => (
              <div key={reason.title} className="space-y-3">
                <h2 className="text-base font-bold text-foreground">
                  {index + 1}. {reason.title}
                </h2>
                <p className="text-base leading-relaxed text-foreground">
                  {reason.description}
                </p>
              </div>
            ))}

            <p className="text-base leading-relaxed text-foreground">
              {whyChooseContent.closing}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
