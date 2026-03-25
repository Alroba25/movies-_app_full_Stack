import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movies App - Cinematic Experience",
  description: "Premium streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased font-sans text-white`}
        style={{ backgroundColor: "#090a0d" }}
      >
        <ClerkProvider>
          {/* Global Auth Header overlaying the existing content */}
          <header className="absolute w-full top-0 left-0 z-60 flex justify-end items-center p-5 pr-6 sm:pr-10 gap-4 sm:gap-6 pointer-events-none">
            <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">

            </div>
          </header>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#1A1D24",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
              },
            }}
          />
        </ClerkProvider>
      </body>
    </html>
  );
}
