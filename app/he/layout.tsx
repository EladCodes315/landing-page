import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
