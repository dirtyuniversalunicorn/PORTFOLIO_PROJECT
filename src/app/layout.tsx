import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProgressIndicator } from "@/components/ProgressIndicator.tsx";
import { Provider } from "@/components/ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaroslav Filo",
  description: "Jaroslav's portfolio page.",
  creator: "Jaroslav",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "en_US", // todo
    url: "https://jaroslavfilo.com",
    siteName: "Jaroslav's Portfolio",
    title: "Jaroslav's Portfolio",
    description: "Porfolio page of Jaroslav Filo",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaroslav Filo Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Suspense>
            <Navigation />
          </Suspense>
          <Suspense>
            <ProgressIndicator />
          </Suspense>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
