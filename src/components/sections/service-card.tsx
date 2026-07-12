import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/content";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const image = service.image ?? service.heroImage;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden bg-[#f5f5f5]",
        "border-b-2 border-b-transparent",
        "transition-all duration-300 ease-out",
        "hover:border-b-brand-green hover:bg-[#fafafa] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <div className="relative px-6 pb-4 pt-8">
        <h3 className="text-lg font-bold leading-snug text-foreground">
          {service.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <ArrowRight
          className={cn(
            "mt-4 size-4 transition-all duration-300",
            "text-muted-foreground/50 group-hover:translate-x-1 group-hover:text-muted-foreground/70"
          )}
          aria-hidden="true"
        />
      </div>

      {image && (
        <div className="relative mt-auto px-6 pb-6">
          <div
            className={cn(
              "relative aspect-[4/3] overflow-hidden transition-[border-radius] duration-300",
              "rounded-sm group-hover:rounded-l-[5rem] group-hover:rounded-r-sm"
            )}
          >
            <Image
              src={asset(image)}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>

          <span
            className={cn(
              "absolute bottom-8 left-8 z-10 flex size-10 items-center justify-center text-sm font-bold transition-colors duration-300",
              "bg-brand-green text-white",
              "group-hover:bg-white group-hover:text-brand-green group-hover:shadow-sm"
            )}
          >
            {service.number}
          </span>
        </div>
      )}
    </Link>
  );
}
