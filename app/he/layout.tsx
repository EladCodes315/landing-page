import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://eaproductstudios.com/he",
    languages: {
      "he-IL": "https://eaproductstudios.com/he",
      "en-US": "https://eaproductstudios.com/en",
    },
  },
  openGraph: {
    locale: "he_IL",
    alternateLocale: ["en_US"],
  },
};

export default function HeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
