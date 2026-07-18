import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { getMockNewsPosts } from "@/lib/content/news";

export function LatestNews() {
  const posts = getMockNewsPosts();

  return (
    <section
      aria-labelledby="latest-news-heading"
      className="section-padding bg-[#f5f5f5]"
    >
      <div className="container mx-auto container-padding">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
              News & Events
            </p>
            <h2
              id="latest-news-heading"
              className="mt-2 text-3xl font-bold uppercase leading-tight text-brand-navy md:text-4xl"
            >
              Latest News
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              Updates from SpherEarth Inc. | SphèreTerre Inc. — programs,
              partnerships, and progress across our sectors.
            </p>
          </div>
          <ButtonLink
            href="/blog"
            className="h-auto min-h-[48px] w-fit gap-2 rounded-[2px] px-7 py-3 text-base font-semibold bg-brand-green hover:bg-brand-green/90"
          >
            View All News
            <ArrowRight className="size-4 stroke-[2.5]" />
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={post.href}
                className="group flex h-full flex-col outline-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={asset(post.image)}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/60">
                    <span className="text-brand-green">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{post.displayDate}</time>
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand-green">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                    Read more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
