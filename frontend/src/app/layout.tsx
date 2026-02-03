"use client"

import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'focusflow-components/dist/index.css'
import { Analytics } from "@vercel/analytics/next"
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/context/context";
import Script from "next/script";
import CookieConsent from "@/components/cookieConsent/cookieConsent";
import ChatbotWidget from "@/components/chatbotWidget/chatbotWidget";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
            className={`${montserrat.variable} ${geistMono.variable} antialiased`}
          >
            {children}
            <CookieConsent />
            <ChatbotWidget />
          </body>
        </ContextProvider>
      </SessionProvider>
    </html>
  );
}
