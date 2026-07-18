"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { latestItems } from "@/lib/content/latest";
import { homeContent } from "@/lib/content/pages";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 7500;

const heroCtaClassName =
  "inline-flex h-12 items-center justify-center border border-white bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10 md:h-14 md:px-10 md:text-lg";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export function HeroSection() {
  const { hero } = homeContent;
  const slides = hero.slides ?? [];
  const items = latestItems.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;
  const activeSlide = slides[activeIndex] ?? slides[0];

  const goToSlide = useCallback(
    (index: number) => {
      if (slideCount === 0) return;
      setActiveIndex((index + slideCount) % slideCount);
    },
    [slideCount]
  );

  useEffect(() => {
    if (slideCount < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [slideCount]);

  if (!activeSlide) {
    return null;
  }

  return (
    <section
      className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden text-white md:min-h-[calc(100svh-6.5rem)]"
      aria-roledescription="carousel"
      aria-label="Homepage hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className="relative h-full w-full shrink-0"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col justify-center container-padding py-16 lg:container">
        <div className="max-w-3xl overflow-hidden">
          <h1 className="text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <div className="mt-6 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide, index) => {
                const external = isExternalHref(slide.ctaHref);

                return (
                  <div
                    key={`${slide.image}-copy`}
                    className="w-full shrink-0 pr-2"
                    aria-hidden={index !== activeIndex}
                  >
                    <p className="max-w-2xl text-lg text-white/90 md:text-xl">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      {external ? (
                        <a
                          href={slide.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={index === activeIndex ? 0 : -1}
                          className={heroCtaClassName}
                        >
                          {slide.ctaLabel}
                        </a>
                      ) : (
                        <Link
                          href={slide.ctaHref}
                          tabIndex={index === activeIndex ? 0 : -1}
                          className={heroCtaClassName}
                        >
                          {slide.ctaLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {slideCount > 1 ? (
            <div className="mt-8 flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.image}-dot`}
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
          ) : null}
        </div>
      </div>

      <ul
        aria-label="Latest"
        className="relative z-10 grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4"
      >
        {items.map((item, index) => {
          const external = item.external || isExternalHref(item.href);
          const className =
            "group relative flex h-[260px] flex-col justify-end overflow-hidden md:h-[300px] lg:h-[340px]";

          const body = (
            <>
              <Image
                src={asset(item.image)}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <span className="relative z-10 flex flex-col gap-2 p-5 md:p-6">
                {index === 0 ? (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    Latest
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="text-base font-bold uppercase leading-snug text-white md:text-lg lg:text-xl">
                  {item.title}
                </span>
                <span className="line-clamp-2 text-sm leading-relaxed text-white/85 md:text-[0.95rem]">
                  {item.description}
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  Explore
                  <ArrowRight className="size-4" />
                </span>
              </span>
            </>
          );

          return (
            <li key={item.id}>
              {external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {body}
                </a>
              ) : (
                <Link href={item.href} className={className}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
