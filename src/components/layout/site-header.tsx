"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/lib/content/site";
import { mainNavigation } from "@/lib/content/navigation";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-green"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-green"
      >
        {item.label}
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </Link>
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[300px] divide-y divide-border overflow-hidden bg-background shadow-lg transition-all",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block px-5 py-3.5 text-sm font-semibold leading-snug text-foreground transition-colors hover:text-brand-green"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="hidden bg-[#f5f5f5] text-foreground/80 md:block">
        <div className="container mx-auto flex items-center justify-between container-padding py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-green"
            >
              <span className="font-semibold italic text-foreground">Email.</span>
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-green"
            >
              <span className="font-semibold italic text-foreground">Call.</span>
              {siteConfig.contact.phone}
            </a>
          </div>
          <SocialLinks variant="plain" />
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between container-padding py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={siteConfig.shortName}
            width={180}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/contact-us"
            className="hidden rounded-none bg-brand-green hover:bg-brand-green/90 sm:inline-flex"
          >
            Contact Us
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
