import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const gothamItalic = localFont({
  src: "./fonts/Gotham/Gotham-BlackItalic.otf",
  variable: "--font-gotham-italic",
  weight: '900'
});

export const gothamLight = localFont({
  src: "./fonts/Gotham/Gotham-Light.otf",
  variable: "--font-gotham-light",
  // weight: '400'
});

export const gothamMedium = localFont({
  src: "./fonts/Gotham/Gotham-Medium.otf",
  variable: "--font-gotham-medium",
  // weight: '400'
});

export const metadata: Metadata = {
  title: "Radix",
  description: "Generated by Source",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gothamLight.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
