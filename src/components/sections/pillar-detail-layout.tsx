import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { corporatePillars } from "@/lib/content/corporate-responsibility";
import { cn } from "@/lib/utils";
import type { CorporatePillar } from "@/types/content";

interface PillarDetailLayoutProps {
  pillar: CorporatePillar;
}

export function PillarDetailLayout({ pillar }: PillarDetailLayoutProps) {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          <article className="space-y-8 lg:col-span-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>

            {pillar.sections?.map((section, index) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold">
                  {index + 1}. {section.title}
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xl font-bold">Corporate Responsibility</h2>
              <nav className="mt-4 space-y-2.5">
                {corporatePillars.map((p) => {
                  const isActive = p.slug === pillar.slug;
                  return (
                    <Link
                      key={p.slug}
                      href={`/corporate-responsibility/${p.slug}`}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-3 px-5 py-3.5 text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-brand-green text-white"
                          : "bg-[#f5f5f5] text-foreground hover:bg-brand-green/10 hover:text-brand-green"
                      )}
                    >
                      <span>{p.title}</span>
                      <ArrowRight
                        className={cn(
                          "size-4 shrink-0",
                          isActive ? "text-white" : "text-muted-foreground"
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="bg-brand-navy p-6 text-white">
              <h3 className="font-heading text-lg font-bold uppercase">
                Get in Touch
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Learn how we bring this commitment to life across our operations
                and communities.
              </p>
              <ButtonLink
                href="/contact-us"
                className="mt-4 w-full gap-2 bg-brand-green hover:bg-brand-green/90"
              >
                Contact Us
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
