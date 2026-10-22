import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Veena Vadini Public School | Betul", template: "%s | Veena Vadini Public School" },
  description: "Established in 2025: bilingual CBSE-pattern education from Nursery to Class 8 in Padhar, Betul, Madhya Pradesh.",
  robots: { index: true, follow: true },
  openGraph: { title: "Veena Vadini Public School · Established 2025", description: "Building Knowledge, Character and a Brighter Future.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
