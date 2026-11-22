import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "MediCare: book doctor appointments", template: "%s · MediCare" },
  description: "Find verified doctors near you and book clinic appointments online.",
};

// Root layout: fonts and global styles only. Area-specific chrome (nav, guards) lives in
// app/(public), app/(auth), app/patient, app/doctor, app/reception and app/admin layouts.
// Don't read the session here: with cacheComponents it would block the whole app shell.

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
