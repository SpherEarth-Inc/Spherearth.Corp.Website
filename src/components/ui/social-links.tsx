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
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
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
