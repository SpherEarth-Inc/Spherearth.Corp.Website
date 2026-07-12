import { PageHero } from "@/components/layout/page-hero";
import { GoogleTranslateWidget } from "@/components/sections/google-translate-widget";
import { translateContent } from "@/lib/content/pages";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Translate",
  description:
    "Translate the SpherEarth website into multiple languages using Google Translate.",
  path: "/translate",
});

export default function TranslatePage() {
  return (
    <>
      <PageHero
        title={translateContent.title}
        breadcrumb={[
          { label: "SpherEarth Inc. | SphèreTerre Inc." },
          { label: "Translate" },
        ]}
        image={translateContent.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-4xl space-y-10">
            <p className="text-base leading-relaxed text-foreground">
              {translateContent.intro}
            </p>

            <GoogleTranslateWidget />

            <p className="text-base leading-relaxed text-foreground">
              {translateContent.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
