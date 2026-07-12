import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import { PageLoader } from "@/components/layout/page-loader";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";
import { Toaster } from "@/components/ui/sonner";
import { createMetadata, siteConfig } from "@/lib/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${spaceGrotesk.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <PageLoader />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppWidget />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
