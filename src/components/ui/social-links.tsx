import type { ComponentType, SVGProps } from "react";
import { siteConfig } from "@/lib/content/site";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
};

function FacebookIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M14 9h3V5.5h-3c-2.2 0-4 1.8-4 4V12H7v3.5h3V22h3.5v-6.5h3l.5-3.5h-3.5V9.5c0-.3.2-.5.5-.5Z" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M17.5 3h3l-6.6 7.6L21.8 21h-5.9l-4.6-6-5.3 6H3l7-8L2.6 3h6l4.1 5.5L17.5 3Zm-1 16h1.6L7.6 4.7H5.9L16.5 19Z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  );
}

function ThreadsIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M16.5 11.4c-.1 0-.2-.1-.3-.1-.2-3-1.9-4.8-4.7-4.8-1.7 0-3.1.7-4 2l1.5 1c.6-.9 1.5-1.1 2.5-1.1 1.4 0 2.5.9 2.7 2.5-.7-.1-1.4-.2-2.2-.1-2.5.1-4.1 1.6-4 3.6.1 1.9 1.7 3 3.6 2.9 2.4-.1 3.5-1.6 3.9-3.4.6.4 1 1 1.2 1.7.3 1.2-.6 3-3.4 4.5l1 1.7c3.2-1.7 4.7-4.2 4.1-6.7-.3-1.3-1.1-2.4-2.3-3-.3-.2-.5-.3-.6-.4Zm-4.9 4.6c-1 .1-1.7-.3-1.8-1-.1-.6.4-1.3 1.9-1.4.5 0 1.1 0 1.6.1-.2 1.4-.9 2.2-1.7 2.3Z" />
    </svg>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.6v2.5c-1.2 0-2.4-.4-3.5-1.1v6.4c0 3.3-2.6 5.6-5.6 5.6a5.5 5.5 0 0 1-.9-11c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.7V3h3.6Z" />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M6.5 8H3.8v12h2.7V8Zm.2-4.2A1.6 1.6 0 1 0 5.1 5.4 1.6 1.6 0 0 0 6.7 3.8ZM20.3 20v-6.6c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8H10.5v12h2.7v-6.3c0-1.4.6-2.3 1.8-2.3 1 0 1.6.7 1.6 2.2V20h2.7Z" />
    </svg>
  );
}

function YouTubeIcon(props: IconProps) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M22 8.2a2.7 2.7 0 0 0-1.9-1.9C18.4 5.8 12 5.8 12 5.8s-6.4 0-8.1.5A2.7 2.7 0 0 0 2 8.2 28 28 0 0 0 1.6 12 28 28 0 0 0 2 15.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.1.5 8.1.5s6.4 0 8.1-.5a2.7 2.7 0 0 0 1.9-1.9c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

const iconMap: Record<string, ComponentType<IconProps>> = {
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
  threads: ThreadsIcon,
  tiktok: TikTokIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

interface SocialLinksProps {
  className?: string;
  variant?: "solid" | "plain";
}

export function SocialLinks({ className, variant = "solid" }: SocialLinksProps) {
  const isPlain = variant === "plain";
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center",
        isPlain ? "gap-3.5" : "gap-2",
        className
      )}
    >
      {siteConfig.socialLinks.map((link) => {
        const Icon = iconMap[link.platform];
        if (!Icon) return null;
        return (
          <li key={link.platform}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={cn(
                "flex items-center justify-center transition-colors",
                isPlain
                  ? "text-brand-green hover:text-brand-green/70"
                  : "size-8 rounded bg-brand-navy text-white hover:bg-brand-green"
              )}
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
