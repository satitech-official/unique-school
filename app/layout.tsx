import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Unique Higher Secondary Public School | Betul", template: "%s | Unique Higher Secondary Public School" },
  description: "Established in 1994: bilingual CBSE-pattern education from Nursery to Class 12 in Sadar Betul, Betul, Madhya Pradesh.",
  robots: { index: true, follow: true },
  openGraph: { title: "Unique Higher Secondary Public School · Established 1994", description: "Building Knowledge, Character and a Brighter Future.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
