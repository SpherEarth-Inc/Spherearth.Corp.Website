import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { services } from "@/lib/content/services";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/content";

interface ServiceDetailLayoutProps {
  service: Service;
}

// Descriptions are stored as a single string; break them into a few balanced
// paragraphs so long copy stays readable.
function splitIntoParagraphs(text: string, groups: number): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim());
  if (!sentences || sentences.length <= groups) {
    return sentences ?? [text];
  }
  const perGroup = Math.ceil(sentences.length / groups);
  const result: string[] = [];
  for (let i = 0; i < sentences.length; i += perGroup) {
    result.push(sentences.slice(i, i + perGroup).join(" "));
  }
  return result;
}

export function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  const paragraphs = splitIntoParagraphs(service.description, 3);

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          <article className="space-y-5 lg:col-span-2">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {service.externalUrl && (
              <div className="pt-2">
                <ButtonLink
                  href={service.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-auto min-h-[48px] w-fit gap-2 rounded-[2px] px-7 py-3 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
                >
                  {service.externalLabel ?? "Learn More"}
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            )}
          </article>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xl font-bold">Our Services</h2>
              <nav className="mt-4 space-y-2.5">
                {services.map((s) => {
                  const isActive = s.slug === service.slug;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-3 px-5 py-3.5 text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-brand-green text-white"
                          : "bg-[#f5f5f5] text-foreground hover:bg-brand-green/10 hover:text-brand-green"
                      )}
                    >
                      <span>{s.title}</span>
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
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Let&apos;s discuss how we can help with your{" "}
                {service.title.toLowerCase()} needs.
              </p>
              <ButtonLink
                href="/contact-us"
                className="mt-4 w-full gap-2 bg-brand-green hover:bg-brand-green/90"
              >
                Contact With Us
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
