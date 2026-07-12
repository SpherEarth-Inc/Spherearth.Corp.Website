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
        breadcrumb={[{ label: "Why Choose Us?" }]}
        image={whyChooseContent.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground">
            {whyChooseContent.intro}
          </p>

          <div className="space-y-8">
            {whyChooseContent.reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="flex gap-6 rounded-lg border bg-card p-6 md:p-8"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold uppercase">{reason.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-muted-foreground">
            {whyChooseContent.closing}
          </p>
        </div>
      </section>
    </>
  );
}
