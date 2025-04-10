import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snap Social",
  description: "Gram Next.js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={twMerge(dmSans.variable, "antialiased bg-black text-white")}
      >
        {children}
      </body>
    </html>
  );
}
