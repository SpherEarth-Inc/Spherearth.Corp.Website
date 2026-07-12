import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
});

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center section-padding">
      <div className="container mx-auto container-padding text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-green">
          404
        </p>
        <h1 className="mt-2 text-4xl font-bold uppercase md:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <ButtonLink href="/" className="mt-8 bg-brand-green hover:bg-brand-green/90">
          <ArrowLeft className="size-4" />
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
