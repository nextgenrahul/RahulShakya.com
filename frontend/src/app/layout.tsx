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
  metadataBase: new URL("https://rahulshakya.com"),

  title: {
    default: "Rahul Shakya — AI Engineer & Full Stack Developer",
    template: "%s | Rahul Shakya",
  },

  description:
    "Rahul Shakya builds AI-powered web applications, containerized backend systems, intelligent automation tools, and modern full-stack products using Next.js, FastAPI, Docker, PostgreSQL, and AI agents.",

  keywords: [
    "Rahul Shakya AI Engineer",
    "Rahul Shakya Full Stack Developer",
    "Next.js Developer India",
    "FastAPI Developer",
    "Docker Developer",
    "AI Automation Engineer",
    "Containerized Web Applications",
    "Enterprise AI Solutions",
  ],

  authors: [{ name: "Rahul Shakya" }],
  creator: "Rahul Shakya",
  publisher: "Rahul Shakya",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://rahulshakya.dev",
  },

  openGraph: {
    title: "Rahul Shakya — AI Engineer & Full Stack Developer",
    description:
      "Building blazing-fast AI products, modern SaaS applications, intelligent agents, and scalable backend architecture.",
    url: "https://rahulshakya.dev",
    siteName: "Rahul Shakya",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahul Shakya — AI Engineer",
    description:
      "AI Engineer building intelligent web products with Next.js, FastAPI, Docker, PostgreSQL and AI agents.",
    creator: "@nextgenrahul",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
