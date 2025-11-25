import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootHeader from '@/app/component/header';
import RootFooter from '@/app/component/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jopfel Gafate Portfoilo",
  description: "This will be my first portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#e0e0e0]`}>
        <RootHeader />
        <main className="flex-1 w-full mx-auto px-6 py-12">
          {children}
        </main>
        <RootFooter />
      </body>
    </html>
  );
}