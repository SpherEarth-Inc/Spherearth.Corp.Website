import { CorporateResponsibilitySection } from "@/components/sections/corporate-responsibility-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LandAcknowledgment } from "@/components/sections/land-acknowledgment";
import { LatestNews } from "@/components/sections/latest-news";
import { FeaturedServices } from "@/components/sections/featured-services";
import { WelcomeSection } from "@/components/sections/welcome-section";
import { getFeaturedServices } from "@/lib/content/services";

export default function HomePage() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      <HeroSection />
      <LatestNews />
      <WelcomeSection />
      <LandAcknowledgment />
      <FeaturedServices services={featuredServices} />
      <CorporateResponsibilitySection />
    </>
  );
}
