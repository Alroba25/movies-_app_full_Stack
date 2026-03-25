"use client";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import MovieCard from "./MovieCard";

export default function ShowContent({
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
        <ChevronLeft
          size={40}
          className="drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transform transition-transform hover:scale-125"
        />
      </button>

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth pb-12 pt-4 px-4 md:px-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={handleScroll}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} type={type} />
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
        <ChevronRight
          size={40}
          className="drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] transform transition-transform hover:scale-125"
        />
      </button>
    </div>
  );
}
