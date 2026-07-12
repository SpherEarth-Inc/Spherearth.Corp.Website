import Image from "next/image";
import type { AcronymValue } from "@/types/content";

interface ValuesAcronymProps {
  values: AcronymValue[];
  eyebrow?: string;
  intro?: string;
  image?: string;
}

export function ValuesAcronym({
  values,
  eyebrow = "Our Core Values",
  intro,
  image,
}: ValuesAcronymProps) {
  return (
    <section className="section-padding bg-[#f5f5f5]">
      <div className="container mx-auto container-padding">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          {image && (
            <div className="hidden lg:block">
              <div className="sticky top-28 overflow-hidden rounded-2xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={image}
                    alt="SpherEarth workspace"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              The SPHER<span className="text-brand-green">EARTH</span> Acronym
            </h2>
            {intro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            )}

            <dl className="mt-8 space-y-5">
              {values.map((value, index) => (
                <div key={`${value.letter}-${value.title}-${index}`}>
                  <dt className="font-semibold text-brand-green">
                    {value.letter} – {value.title}
                  </dt>
                  <dd className="mt-1 text-muted-foreground">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
