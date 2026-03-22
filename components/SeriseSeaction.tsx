"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SeriesSection({ movies }: { movies: any[] }) {
  const promoMovies = movies?.slice(0, 10) || [];
  const displayMovies = [...promoMovies, ...promoMovies];
console.log(displayMovies);
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
            Top International Series
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
                alt={movie.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md">
                  {movie.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}