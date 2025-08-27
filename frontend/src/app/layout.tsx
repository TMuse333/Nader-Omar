"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'focusflow-components/dist/index.css'
import { Analytics } from "@vercel/analytics/next"
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/context/context";
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



      <Analytics/>
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
