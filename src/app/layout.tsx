import type { Metadata } from "next";
import { Chakra_Petch, Geist_Mono } from "next/font/google";
import { applyThemeBeforePaint } from "../components/theme";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gamerdex.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GamerDex: Free Game Progress Trackers",
    template: "%s | GamerDex",
  },
  description:
    "Free progress trackers for Dinkum, Stardew Valley, Supermarket Simulator, Whiteout Survival and Clash of Clans. No account, your data stays in your browser, and cloud sync is optional.",
  keywords: [
    "game tracker",
    "game progress",
    "gaming companion",
    "game catalog",
    "GamerDex",
    "Dinkum tracker",
    "Stardew Valley tracker",
    "Supermarket Simulator tracker",
    "Whiteout Survival tracker",
    "Clash of Clans tracker",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GamerDex: Free Game Progress Trackers",
    description:
      "Free progress trackers for Dinkum, Stardew Valley, Supermarket Simulator, Whiteout Survival and Clash of Clans. No account, your data stays in your browser, and cloud sync is optional.",
    url: siteUrl,
    siteName: "GamerDex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GamerDex: Free Game Progress Trackers",
    description:
      "Free progress trackers for Dinkum, Stardew Valley, Supermarket Simulator, Whiteout Survival and Clash of Clans. No account, your data stays in your browser, and cloud sync is optional.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: applyThemeBeforePaint }} />
      </head>
      <body
        className={`${chakraPetch.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
