import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eaproductstudios.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Let each locale page control <html>
}
