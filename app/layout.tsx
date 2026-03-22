import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  Show,
  UserButton,
} from "@clerk/nextjs";

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
              <Show when="signed-in">
                <div className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl border-2 border-[#FFD700] rounded-full overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.3)] gap-3">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox:
                          "w-9 h-9 sm:w-10 sm:h-10 border-none shadow-none",
                      },
                    }}
                  />
                </div>
              </Show>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
