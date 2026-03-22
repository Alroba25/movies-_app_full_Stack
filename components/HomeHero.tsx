import React from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Monitor,
  MegaphoneOff,
  ArrowDownCircle,
  Tv,
  Baby,
} from "lucide-react";
import Link from "next/link";

export default function HomeHero({ movie }: { movie: any }) {
  // Use a fallback TMDB backdrop or the generated one
  const bgImage = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/Images/hero_fallback.jpg"; // fallback layout

  const features = [
    {
      icon: Tv,
      label: "HD Quality",
    },
    {
      icon: ArrowDownCircle,
      label: "Direct Download",
    },
    {
      icon: MegaphoneOff,
      label: "Ad-Free",
    },
    {
      icon: Monitor,
      label: "Multiple Devices",
    },
    {
      icon: Users,
      label: "5 Profiles",
    },
    {
      icon: Baby,
      label: "Kids Safe",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex flex-col items-center justify-between overflow-hidden bg-[#0B0B0F] text-white pt-20 pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0B0B0F] to-transparent z-10" />

      {/* Main Content (Centered safely in flex container) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light uppercase tracking-widest leading-relaxed drop-shadow-lg text-white/90">
          A world of entertainment from local and
          <br className="hidden md:block" /> international works
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light uppercase tracking-widest leading-relaxed drop-shadow-lg mt-2 md:mt-4 text-white/90">
          and much more specially for you, start your journey now...
        </h2>

        <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/movies">
            <Button className="cursor-pointer rounded-full px-6 py-3 md:px-8 md:py-5 text-sm md:text-base font-bold uppercase tracking-wider bg-linear-to-r from-[#E50914] to-[#ff4b4b] hover:from-[#c10710] hover:to-[#e50914] text-white shadow-[0_4px_15px_rgba(229,9,20,0.4)] transition-all">
              Start Journey Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Bar (Static at bottom of flex column, no overlap) */}
      <div className="relative z-20 w-full px-4 md:px-10 mt-auto">
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center max-w-7xl mx-auto gap-4 sm:gap-0 divide-x-0 sm:divide-x divide-[#B3B3B3]/20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center w-1/3 sm:w-1/6 px-2 sm:px-4 space-y-3"
              >
                <div className="p-2 sm:p-3 rounded-full border border-transparent bg-[#E50914]/5">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#E50914]" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-[#B3B3B3] text-center uppercase tracking-wider">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
