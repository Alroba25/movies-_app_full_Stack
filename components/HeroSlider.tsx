"use client";

import { useEffect, useState } from "react";
import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { truncateText } from "@/lib/utils";

export default function HeroSlider({
  movies,
  type,
}: {
  movies: any[];
  type: "movies" | "series";
}) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeMovie = (newIndex: number) => {
    if (newIndex === index) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIndex(newIndex);
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeMovie((index + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, movies.length]);

  if (!movies || movies.length === 0) return null;

  const movie = movies[index];
  const year = movie.release_date ? movie.release_date.split("-")[0] : "2026";

  return (
    <>
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Background Image with motion */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out transform ${
            isAnimating
              ? "blur-xl scale-110 brightness-50"
              : "blur-0 scale-105 brightness-100"
          }`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        />

        {/* Gradient Overlays - constrained to keep the image clearer */}
        {/* Left-side dark gradient for text readability (only covers up to half the screen on large devices) */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-[60%] bg-linear-to-r from-black/95 via-black/80 to-transparent z-10" />
        {/* Bottom gradient specifically for the thumbnails UI */}
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent z-10" />

        {/* Content Container */}
        <div
          className={`absolute top-0 bottom-[120px] md:bottom-[150px] left-0 z-20 w-full px-6 md:px-12 lg:px-20 max-w-2xl xl:max-w-3xl flex flex-col justify-end pb-4 md:pb-6 pt-20 transition-all duration-500 ${
            isAnimating
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Title - using text for now, can be an image logo later */}
          <div>
            <h1 className="text-white font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 drop-shadow-2xl tracking-tight leading-tight">
              {type === "movies"
                ? truncateText(movie.title, 20)
                : truncateText(movie.name, 20)}
            </h1>
            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs sm:text-sm md:text-base text-gray-200 mb-4 md:mb-5 font-serif font-bold tracking-wide drop-shadow-md">
              <span className="text-white px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs tracking-wider bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                New
              </span>
              <span>{year}</span>
              <span className="text-gray-400">•</span>
              <span>Action, Drama</span>
              <span className="text-gray-400">•</span>
              <span>2h 15m</span>
            </div>
            {/* Overview / Description */}
            <p className="text-gray-300 font-serif text-sm sm:text-base md:text-lg lg:text-xl mb-5 max-w-xl drop-shadow-md leading-relaxed">
              {truncateText(movie?.overview, 100) ||
                "No description available for this movie."}
            </p>
            {/* Actors / Cast (Mock Data for aesthetic) */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300 mb-6 md:mb-8 font-serif font-bold tracking-wide drop-shadow-md">
              <span>Actor 1</span>
              <span className="text-gray-500">•</span>
              <span>Actor 2</span>
              <span className="text-gray-500">•</span>
              <span>Actor 3</span>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-auto sm:mt-0">
              <Button
                size={"xl"}
                className="cursor-pointer flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-5 sm:px-8 py-3 md:py-3.5 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-transparent text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <span>Watch Now</span>
              </Button>
              <Button
                size={"xl"}
                className="cursor-pointer flex items-center space-x-2 bg-transparent border-[1.5px] border-white/60 hover:border-white hover:bg-white/10 text-white px-5 sm:px-8 py-3 md:py-3.5 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm text-sm md:text-base"
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5" />
                <span>Add to List</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Thumbnails Row (Bottom Slider) */}
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-30 px-6 md:px-12 lg:px-20">
          <div
            className="flex items-center gap-6 md:gap-10 overflow-x-auto pb-4 pt-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {movies.map((m, i) => (
              <button
                key={m.id || i}
                onClick={() => changeMovie(i)}
                className={`relative shrink-0 transition-all duration-500 snap-start cursor-pointer group flex flex-col items-center justify-center
                  ${
                    index === i
                      ? "opacity-100 scale-110"
                      : "opacity-40 hover:opacity-80 hover:scale-105"
                  }
                `}
                ref={(el) => {
                  if (el && index === i) {
                    const container = el.parentElement;
                    if (container) {
                      const elRect = el.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollPosition =
                        container.scrollLeft +
                        elRect.left -
                        containerRect.left -
                        containerRect.width / 2 +
                        elRect.width / 2;

                      container.scrollTo({
                        left: scrollPosition,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
              >
                <div className="w-24 md:w-32 lg:w-40 min-h-[50px] flex items-center justify-center text-center">
                  <h3
                    className="text-white font-serif font-bold text-sm md:text-base lg:text-xl tracking-wide leading-tight"
                    style={{
                      textShadow:
                        "0px 4px 15px rgba(0,0,0,0.9), 0px 2px 5px rgba(0,0,0,0.7)",
                    }}
                  >
                    {type === "series"
                      ? truncateText(m.name, 15)
                      : truncateText(m.title, 15)}
                  </h3>
                </div>
                {/* Red Underline (Active Indicator) */}
                <div
                  className={`h-[3px] rounded-full transition-all duration-500 mt-3 ${
                    index === i
                      ? "w-12 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,1)]"
                      : "w-0 bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
