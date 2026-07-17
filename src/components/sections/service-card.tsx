import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types/content";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

function ServicesArrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="12"
      viewBox="0 0 26 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        opacity="0.6"
        d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const image = service.image ?? service.heroImage;

  return (
    <Link
      href={`/services/${service.slug}`}
      style={{
        backgroundImage: `url(${asset("/images/service-card-shape.png")})`,
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[4px] bg-[#f9fafa]",
        "bg-right-top bg-no-repeat",
        "pt-8 pl-8 pb-8 transition-shadow duration-500",
        "hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="relative z-10 flex flex-1 flex-col pr-8">
        <h3 className="text-[26px] font-bold leading-8 text-[#142340]">
          {service.title}
        </h3>
        <p className="mt-5 text-sm font-medium leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <span className="mt-5 mb-6 inline-flex text-[#616161] transition-colors duration-300 group-hover:text-brand-green">
          <ServicesArrow />
        </span>
      </div>

      {image && (
        <div className="relative z-10 mt-auto w-full">
          <div className="relative aspect-[352/199] w-full overflow-hidden">
            <Image
              src={asset(image)}
              alt={service.title}
              fill
              className={cn(
                "object-cover transition-all duration-500 ease-out",
                "rounded-tl-[4px]",
                "group-hover:rounded-tl-[100px] group-hover:rounded-bl-[100px]"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      )}

      <span
        className={cn(
          "absolute bottom-5 left-8 z-20 flex size-[31px] items-center justify-center",
          "bg-white text-sm font-medium text-brand-green"
        )}
      >
        {service.number}
      </span>

      {/* Bottom accent bar — matches live style5 hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-green transition-all duration-500 ease-out group-hover:w-full"
      />
    </Link>
  );
}
