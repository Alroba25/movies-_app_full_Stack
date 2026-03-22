"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PromoSection({ movies }: { movies: any[] }) {
  // Take top 10 movies for the landscape display
  const promoMovies = movies?.slice(0, 10) || [];

  // Duplicate the array to create a seamless endless loop effect
  const displayMovies = [...promoMovies, ...promoMovies];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize the starting position halfway through the duplicated list
    // so it can seamlessly scroll to the left (items moving left to right)
    if (scrollRef.current.scrollLeft === 0) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
    }

    if (isHovered) return;

    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= 1;

        // When we reach the true left edge (0), seamlessly jump back
        // to the halfway point so the duplicate acts as an endless loop.
        if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="w-full bg-[#0b0b0f] relative overflow-hidden flex flex-col pt-10 pb-16">
      {/* Abstract soundwave background element for the top half */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(138, 43, 226, 0.4) 10px, rgba(138, 43, 226, 0.4) 12px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Top Section: Top International Movies */}
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-10 z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
            Top International Movies
          </h2>
        </div>

        {/* Movie Landscape Cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 md:gap-6 overflow-x-hidden pb-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {displayMovies.map((movie, idx) => (
            <Link
              href={`/movies/${movie.id}`}
              key={idx}
              className="relative shrink-0 w-[260px] h-[150px] md:w-[320px] md:h-[180px] rounded-lg overflow-hidden group border border-white/10 hover:border-[#E50914]/50 transition-colors shadow-lg"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md">
                  {movie.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Separator / Divider Style */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-10" />

      {/* Bottom Section: Subscription Banner */}
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-10 z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Text and CTA */}
        <div className="flex flex-col items-start text-left max-w-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            One Subscription, Endless Entertainment...
          </h2>
          <div className="w-16 h-1 bg-[#E50914] mb-4" />
          <p className="text-[#B3B3B3] text-sm md:text-base mb-8">
            Watch all new platform releases in just one place.
          </p>
          <Link href="/sign-up">
            <Button className="cursor-pointer bg-[#E50914] hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-md transition-all hover:scale-105 shadow-[0_4px_15px_rgba(229,9,20,0.4)]">
              Create Your Account Now
            </Button>
          </Link>
        </div>

        {/* Right Side: Streaming Service Logos (Text-based alternatives) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-x-12 md:gap-y-8 items-center justify-items-center opacity-80">
          <div className="text-blue-500 font-serif italic font-bold text-xl drop-shadow-sm">
            Paramount+
          </div>
          <div className="text-orange-500 font-black tracking-tighter text-2xl drop-shadow-sm">
            crunchyroll
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#00A8E1] font-bold text-xl leading-none">
              prime
            </span>
            <span className="text-[#00A8E1] font-medium text-lg leading-none">
              video
            </span>
          </div>
          <div className="text-[#1CE783] font-black text-3xl tracking-tighter drop-shadow-sm">
            hulu
          </div>

          <div className="text-blue-400 font-bold text-2xl tracking-tight">
            blu<span className="text-white">tv</span>
          </div>
          <div className="text-white font-serif font-black text-3xl tracking-widest drop-shadow-lg">
            HBO
          </div>
          <div className="text-white font-serif font-bold italic text-2xl drop-shadow-lg">
            Disney+
          </div>
          <div className="text-[#E50914] font-black tracking-widest text-2xl drop-shadow-lg">
            NETFLIX
          </div>
        </div>
      </div>

      {/* Angled dark bottom slice effect */}
      <div className="absolute -bottom-10 left-0 right-0 h-16 bg-[#0B0B0F] transform -skew-y-1 z-0" />
    </div>
  );
}
