import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Livvic } from "next/font/google";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

//👇 Configure our font object
const livvic = Livvic({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["900", "700", "600", "500", "400", "300", "200"],
  variable: "--livvic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={livvic.className}>
      <body>{children}</body>
    </html>
  );
}
