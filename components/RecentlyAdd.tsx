"use client";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useRef } from "react";

export default function RecentlyAdd({ movies }: { movies: any[] }) {
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
    <div className="relative py-8 group/container">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4 md:px-8 border-l-4 border-yellow-500 ml-4 md:ml-8">
        Recently Added
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className={`absolute left-2 md:left-6 top-[60%] -translate-y-1/2 z-20 bg-black/60 hover:bg-black/90 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center
          ${
            isStart
              ? "opacity-0 pointer-events-none scale-90"
              : "opacity-0 group-hover/container:opacity-100 scale-100 hover:scale-110"
          }
        `}
        aria-label="Scroll left"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth pb-8 pt-4 px-4 md:px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={handleScroll}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative shrink-0 w-[160px] h-[240px] md:w-[220px] md:h-[330px] bg-gray-900 rounded-xl overflow-hidden cursor-pointer snap-start transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name || "Movie poster"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Elegant dark gradient overlay that appears on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Movie Title / Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-white font-bold text-base md:text-lg line-clamp-2 md:line-clamp-1 drop-shadow-md">
                {movie.title || movie.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-xs md:text-sm font-semibold">
                    {movie.vote_average?.toFixed(1) || "NR"}
                  </span>
                </div>
                {movie.release_date && (
                  <span className="text-gray-300 text-xs md:text-sm font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                    {movie.release_date.substring(0, 4)}
                  </span>
                )}
                {/* Fallback for TV Shows */}
                {movie.first_air_date && !movie.release_date && (
                  <span className="text-gray-300 text-xs md:text-sm font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                    {movie.first_air_date.substring(0, 4)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className={`absolute right-2 md:right-6 top-[60%] -translate-y-1/2 z-20 bg-black/60 hover:bg-black/90 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center
          ${
            isEnd
              ? "opacity-0 pointer-events-none scale-90"
              : "opacity-0 group-hover/container:opacity-100 scale-100 hover:scale-110"
          }
        `}
        aria-label="Scroll right"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
