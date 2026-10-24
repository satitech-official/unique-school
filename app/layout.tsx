import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Unique Higher Secondary Public School | Betul", template: "%s | Unique Higher Secondary Public School" },
  description: "Established in 1994: bilingual CBSE-pattern education from Nursery to Class 12 in Sadar Betul, Betul, Madhya Pradesh.",
  robots: { index: true, follow: true },
  icons: { icon: "/unique-school-logo.webp", shortcut: "/unique-school-logo.webp", apple: "/unique-school-logo.webp" },
  openGraph: { title: "Unique Higher Secondary Public School · Established 1994", description: "Building Knowledge, Character and a Brighter Future.", images: [{ url: "/unique-school-logo.webp", width: 150, height: 150 }] },
  twitter: { card: "summary_large_image", images: ["/unique-school-logo.webp"] },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
