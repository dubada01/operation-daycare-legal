import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;
  return {
    title: {
      default: "Operation Daycare | Safety, privacy, and support",
      template: "%s | Operation Daycare",
    },
    description:
      "Official privacy policy, terms of use, safety information, and support for Operation Daycare.",
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      title: "Operation Daycare",
      description: "Safety, privacy & support",
      type: "website",
      images: [{ url: socialImage, width: 1713, height: 909, alt: "Operation Daycare safety, privacy, and support" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Operation Daycare",
      description: "Safety, privacy & support",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
