"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'focusflow-components/dist/index.css'
import { Analytics } from "@vercel/analytics/next"
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/context/context";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ContextProvider>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-P4KFS4EYXY"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4KFS4EYXY');
            `}
          </Script>

          <Analytics />
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </ContextProvider>
      </SessionProvider>
    </html>
  );
}
