import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { homeContent } from "@/lib/content/pages";

export function CorporateResponsibilitySection() {
  const { corporateResponsibility } = homeContent;

  return (
    <section className="section-padding bg-[#f5f5f5]">
      <div className="container mx-auto container-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[400px]">
            <Image
              src={asset("/images/csr-sample.webp")}
              alt="Corporate responsibility and sustainability"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              {corporateResponsibility.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              {corporateResponsibility.description}
            </p>
            <ButtonLink
              href="/corporate-responsibility"
              className="mt-8 h-auto min-h-[52px] w-fit gap-2 rounded-[2px] px-8 py-3.5 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
            >
              View Our Corporate Responsibility
              <ArrowRight className="size-4 stroke-[2.5]" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
