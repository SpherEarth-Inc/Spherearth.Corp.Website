"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { homeContent } from "@/lib/content/pages";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 7500;

export function HeroSection() {
  const { hero } = homeContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = hero.slides.length;
  const activeSlide = hero.slides[activeIndex];

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex((index + slideCount) % slideCount);
    },
    [slideCount]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [slideCount]);

  return (
    <section
      className="relative min-h-[calc(100svh-4.5rem)] text-white md:min-h-[calc(100svh-6.5rem)]"
      aria-roledescription="carousel"
      aria-label="Homepage hero"
    >
      {hero.slides.map((slide, index) => (
        <div
          key={slide.image}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={asset(slide.image)}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] items-center container-padding py-20 pb-24 md:min-h-[calc(100svh-6.5rem)] md:py-28 md:pb-32 lg:container">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <div
            key={activeIndex}
            className="transition-opacity duration-700 ease-in-out"
          >
            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              {activeSlide.description}
            </p>
            <div className="mt-8">
              <ButtonLink
                href={activeSlide.ctaHref}
                size="lg"
                className="h-12 gap-2 px-8 text-base md:h-14 md:px-10 md:text-lg bg-brand-green hover:bg-brand-green/90"
              >
                {activeSlide.ctaLabel}
                <ArrowRight className="size-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {hero.slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goToSlide(index)}
            className={cn(
              "size-2.5 rounded-full transition-colors",
              index === activeIndex
                ? "bg-brand-green"
                : "bg-white/40 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
