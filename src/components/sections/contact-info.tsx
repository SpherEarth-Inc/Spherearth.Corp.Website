import { Clock, MapPin, MessagesSquare, PhoneCall } from "lucide-react";
import { contactContent } from "@/lib/content/pages";
import { siteConfig } from "@/lib/content/site";

const contactItems = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: contactContent.locationLines,
  },
  {
    icon: Clock,
    title: "Opening Hour",
    lines: ["Monday to Friday", "10:00am to 5:00pm"],
  },
  {
    icon: MessagesSquare,
    title: "Chat to Support",
    lines: [siteConfig.contact.email],
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: PhoneCall,
    title: "Call Us",
    lines: [siteConfig.contact.phone],
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
];

export function ContactInfo() {
  return (
    <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {contactItems.map((item) => (
        <div
          key={item.title}
          className="h-full rounded-lg border border-border bg-background p-6"
        >
          <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-muted text-foreground">
            <item.icon className="size-6" aria-hidden="true" />
          </div>
          <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
          <div className="space-y-0.5 text-sm leading-relaxed text-muted-foreground">
            {item.lines.map((line) =>
              item.href ? (
                <a
                  key={line}
                  href={item.href}
                  className="block break-words transition-colors hover:text-brand-green"
                >
                  {line}
                </a>
              ) : (
                <p key={line}>{line}</p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
