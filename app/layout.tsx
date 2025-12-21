import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EA Product Studios | MVP Builder & Product Engineer",
  description:
    "Building MVPs that turn ideas into real products. MVP Builder & Product Engineer helping early-stage startups go from idea to production — fast, focused, and scalable.",
  openGraph: {
    title: "EA Product Studios",
    description:
      "Building MVPs that turn ideas into real products. From idea to production — fast, focused, and scalable.",
    url: "https://eaproductstudios.com",
    siteName: "EA Product Studios",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "EA Product Studios – Building MVPs that turn ideas into real products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA Product Studios",
    description: "Building MVPs that turn ideas into real products.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
