import { Titillium_Web } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";

config.autoAddCss = false;

const titillium = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Murrosmedia",
  description: "Murrosmedia",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <link
        rel="preload"
        as="image"
        href="/freelance-sisallontuottaja-mobile.webp"
      />
    </head>

    <body className={titillium.className}>{children}</body>
    <GoogleAnalytics gaId="G-MCDZBZK9JH" />
  </html>
);

export default RootLayout;
