import Image from "next/image";
import { homeContent } from "@/lib/content/pages";

export function LandAcknowledgment() {
  const { landAcknowledgment } = homeContent;

  return (
    <section className="section-padding bg-[#f5f5f5]">
      <div className="container mx-auto container-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={landAcknowledgment.image}
              alt="Toronto cityscape with park and globe sculpture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              {landAcknowledgment.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {landAcknowledgment.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
