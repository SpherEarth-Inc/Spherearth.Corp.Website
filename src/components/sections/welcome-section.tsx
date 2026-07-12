import Image from "next/image";
import { ArrowRight, Cog, Microscope, Plus } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { homeContent } from "@/lib/content/pages";

export function WelcomeSection() {
  const { welcome } = homeContent;

  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.06]"
        aria-hidden="true"
      >
        <div className="flex items-center gap-6 pl-4">
          <Cog className="size-24 text-foreground" strokeWidth={1} />
          <Plus className="size-8 text-foreground" strokeWidth={1.5} />
          <Cog className="size-16 text-foreground" strokeWidth={1} />
        </div>
      </div>

      <Microscope
        className="pointer-events-none absolute bottom-8 right-8 size-40 text-foreground opacity-[0.06] md:size-52"
        strokeWidth={1}
        aria-hidden="true"
      />

      <div className="container relative mx-auto container-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={asset("/images/logo.png")}
              alt="SpherEarth"
              width={420}
              height={200}
              className="h-auto w-full max-w-[320px] object-contain sm:max-w-[380px] lg:max-w-[420px]"
              priority
            />
          </div>

          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              {welcome.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.5rem]">
              {welcome.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              {welcome.description}
            </p>
            <ButtonLink
              href="/about-us"
              className="mt-8 h-auto min-h-[52px] w-fit gap-2 rounded-[2px] px-8 py-3.5 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
            >
              About Us
              <ArrowRight className="size-4 stroke-[2.5]" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
