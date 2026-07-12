import { PageHero } from "@/components/layout/page-hero";
import { ContactInfo } from "@/components/sections/contact-info";
import { ContactForm } from "@/components/forms/contact-form";
import { contactContent } from "@/lib/content/pages";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with SpherEarth Inc. | SphèreTerre Inc. at our Toronto office. We'd love to hear from you.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={contactContent.title}
        breadcrumb={[{ label: "Contact Us" }]}
        image={contactContent.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding space-y-12">
          <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-muted-foreground">
            {contactContent.intro}
          </p>

          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="SpherEarth office location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                contactContent.mapQuery
              )}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>

          <ContactInfo />
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-5xl border-t-4 border-brand-green bg-background p-8 shadow-sm sm:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold">
                {contactContent.formTitle}
              </h2>
              <p className="text-muted-foreground">{contactContent.formIntro}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
