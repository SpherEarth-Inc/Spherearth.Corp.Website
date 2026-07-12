import { Search } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Input } from "@/components/ui/input";
import { blogContent } from "@/lib/content/pages";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "News & Events",
  description:
    "Stay up to date with the latest news and events from SpherEarth Inc. | SphèreTerre Inc.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title={blogContent.title}
        breadcrumb={[{ label: "News & Events" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search news and events..."
                className="pl-10"
                disabled
                aria-label="Search news and events"
              />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-md text-center">
            <p className="text-lg text-muted-foreground">
              {blogContent.emptyMessage}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
