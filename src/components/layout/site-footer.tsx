import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/ui/social-links";
import { asset } from "@/lib/asset";
import { footerNavigation } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#1f1f1f] text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/4 opacity-70">
        <Image
          src={asset("/images/footer-skyline.webp")}
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto container-padding py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-5">
            <div className="inline-flex rounded-md bg-white p-3">
              <Image
                src={asset("/images/logo.webp")}
                alt={siteConfig.shortName}
                width={180}
                height={48}
                className="h-11 w-auto"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              SpherEarth Inc. / SphèreTerre Inc. is a Canadian-based Private
              Corporation dedicated to providing holistic solutions across
              multiple sectors.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNavigation.usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-bold">Office Address</h3>
              <address className="text-sm not-italic leading-relaxed text-white/70">
                {siteConfig.contact.address},
                <br />
                {siteConfig.contact.city}
              </address>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold">Email Address</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Interested in working with us?
                <br />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-brand-green"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-bold">Phone Number</h3>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="text-sm text-white/70 transition-colors hover:text-brand-green"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-brand-green">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
          <Image
            src={asset("/images/footer-wave.webp")}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <p className="container mx-auto container-padding py-4 text-center text-sm font-medium text-white">
          &copy; {year} {siteConfig.name} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
