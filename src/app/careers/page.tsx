import { PageHero } from "@/components/layout/page-hero";
import { CareersForm } from "@/components/forms/careers-form";
import { careersContent } from "@/lib/content/pages";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join SpherEarth Inc. | SphèreTerre Inc. and help create sustainable, impactful solutions across diverse industries.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        title={careersContent.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "Careers" },
        ]}
        image="/images/careers-hero.png"
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-14">
            <div className="space-y-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                {careersContent.intro}
              </p>

              <div>
                <h2 className="font-bold underline decoration-1 underline-offset-4">
                  Job Openings
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {careersContent.jobOpenings}
                </p>
              </div>

              <div>
                <h2 className="font-bold underline decoration-1 underline-offset-4">
                  Why Join Us?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {careersContent.whyJoin}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  {careersContent.benefits.map((benefit) => (
                    <li key={benefit.title}>
                      <span className="font-medium text-foreground">
                        {benefit.title}:
                      </span>{" "}
                      {benefit.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold underline decoration-1 underline-offset-4">
                  Application Portal
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {careersContent.applicationPortal}
                </p>
              </div>
            </div>

            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
