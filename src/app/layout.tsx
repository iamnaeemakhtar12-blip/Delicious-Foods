import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Fredoka, Manrope } from "next/font/google";
import { restaurant } from "@/content/restaurant";
import "./globals.css";
import { SiteHeader } from "@/components/domain/site-header";
import { SiteFooter } from "@/components/domain/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { FloatingCart } from "@/components/domain/floating-cart";
import { CartSheet } from "@/components/domain/cart-sheet";

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Delicious Foods Wah Cantt',
    default: 'Delicious Foods | Premium Fast Food in Wah Cantt',
  },
  description: 'The best pizza, burgers, and fast food in Wah Cantt. Order online for fast local delivery.',
  openGraph: {
    title: 'Delicious Foods Wah Cantt',
    description: 'The best pizza, burgers, and fast food in Wah Cantt.',
    url: 'https://deliciousfoods.com',
    siteName: 'Delicious Foods',
    locale: 'en_PK',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fredoka.variable} font-sans antialiased bg-[#FAFAFA] min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingCart />
        <CartSheet />
        <Toaster position="top-center" duration={2000} />
      </body>
    </html>
  );
}
