import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://eaproductstudios.com/en",
    languages: {
      "he-IL": "https://eaproductstudios.com/he",
      "en-US": "https://eaproductstudios.com/en",
    },
  },
  openGraph: {
    locale: "en_US",
    alternateLocale: ["he_IL"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
