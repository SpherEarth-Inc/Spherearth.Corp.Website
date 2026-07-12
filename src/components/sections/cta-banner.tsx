import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  title = "Have a project in mind?",
  description = "Let's work together to scale sustainable synergies. Get in touch with our team today.",
  primaryLabel = "Contact Us",
  primaryHref = "/contact-us",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: CtaBannerProps) {
  return (
    <section className="section-padding bg-brand-navy text-white">
      <div className="container mx-auto container-padding text-center">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href={primaryHref}
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90"
          >
            {primaryLabel}
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink
            href={secondaryHref}
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            {secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
