import { Titillium_Web } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const titillium = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </head>
    <body className={titillium.className}>{children}</body>
    <GoogleAnalytics gaId="G-MCDZBZK9JH" />
  </html>
);

export default RootLayout;
