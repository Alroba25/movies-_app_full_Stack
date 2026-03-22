"use client";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ShowMovies({
  movies,
  title,
  type = "movies",
}: {
  movies: any[];
  title: string;
  type?: "movies" | "tvshow" | "series" | "kids";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setIsStart(el.scrollLeft <= 0);
    setIsEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative py-10 pt-4 group/container bg-[#0B0B0F]">
      {/* Title */}
      <div className="flex items-center px-4 md:px-10 mb-6 group cursor-pointer">
        <h2 className="text-2xl md:text-3xl font-(family-name:--font-playfair) font-bold text-white tracking-wide transition-colors group-hover:text-[#B3B3B3]">
          {title}
        </h2>
        <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-3 transition-all duration-300 text-[#FFD700] font-bold text-xl">
          <ChevronRight size={24} />
        </span>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className={`absolute left-0 top-[55%] -translate-y-1/2 z-20 h-full max-h-[250px] w-14 md:w-16 bg-linear-to-r from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent text-white flex items-center justify-start pl-2 md:pl-4 transition-all duration-300 hover:text-[#FFD700]
          ${
            isStart
              ? "opacity-0 pointer-events-none"
              : "opacity-0 group-hover/container:opacity-100"
          }
        `}
        aria-label="Scroll left"
      >
        <ChevronLeft size={40} className="drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transform transition-transform hover:scale-125" />
      </button>

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth pb-12 pt-4 px-4 md:px-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={handleScroll}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group/card relative shrink-0 w-[160px] h-[240px] md:w-[220px] md:h-[330px] bg-[#12121A] rounded-xl overflow-visible cursor-pointer snap-start transition-all duration-500 hover:z-30 hover:-translate-y-4 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5 hover:ring-[#FFD700]/30"
          >
            <Link href={`/${type}/${movie.id}`} className="block w-full h-full relative rounded-xl overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name || "Movie poster"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              {/* Elegant dark gradient overlay that appears on hover */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#E50914]/0 group-hover/card:bg-[#E50914]/10 transition-colors duration-500 mix-blend-overlay" />

              {/* Movie Title / Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-6 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-700 flex flex-col justify-end">
                <h3 className="text-white font-bold font-(family-name:--font-playfair) text-base md:text-xl line-clamp-2 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {movie.title || movie.name}
                </h3>
                <div className="flex items-center gap-3 mt-3 font-sans">
                  <div className="flex items-center gap-1.5 bg-[#FFD700]/10 border border-[#FFD700]/20 backdrop-blur-md px-2 py-1 rounded-sm shadow-[0_0_10px_rgba(255,215,0,0.1)]">
                    <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#FFD700] fill-[#FFD700]" />
                    <span className="text-[#FFD700] text-xs md:text-sm font-bold">
                      {movie.vote_average?.toFixed(1) || "NR"}
                    </span>
                  </div>
                  {movie.release_date && (
                    <span className="text-[#B3B3B3] text-xs md:text-sm font-medium tracking-wide">
                      {movie.release_date.substring(0, 4)}
                    </span>
                  )}
                  {/* Fallback for TV Shows */}
                  {movie.first_air_date && !movie.release_date && (
                    <span className="text-[#B3B3B3] text-xs md:text-sm font-medium tracking-wide">
                      {movie.first_air_date.substring(0, 4)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className={`absolute right-0 top-[55%] -translate-y-1/2 z-20 h-full max-h-[250px] w-14 md:w-16 bg-linear-to-l from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent text-white flex items-center justify-end pr-2 md:pr-4 transition-all duration-300 hover:text-[#FFD700]
          ${
            isEnd
              ? "opacity-0 pointer-events-none"
              : "opacity-0 group-hover/container:opacity-100"
          }
        `}
        aria-label="Scroll right"
      >
        <ChevronRight size={40} className="drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transform transition-transform hover:scale-125" />
      </button>
    </div>
  );
}
