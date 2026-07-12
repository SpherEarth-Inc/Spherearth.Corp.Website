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
        breadcrumb={[{ label: "Translate" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-lg text-muted-foreground">
              {translateContent.intro}
            </p>

            <GoogleTranslateWidget />

            <p className="rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
              {translateContent.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
