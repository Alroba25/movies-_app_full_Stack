"use client";

import { useEffect, useState } from "react";
import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { truncateText } from "@/lib/utils";
import AddToListButton from "./AddToListButton";
import Link from "next/link";

import Image from "next/image";

export default function HeroSlider({
  movies,
  type,
}: {
  movies: any[];
  type: "movies" | "series" | "kids";
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
    }, 6000);

    return () => clearInterval(interval);
  }, [index, movies.length]);

  if (!movies || movies.length === 0) return null;

  const movie = movies[index];
  const year = movie.release_date ? movie.release_date.split("-")[0] : "2026";

  return (
    <>
      <div className="relative h-[90vh] md:h-screen w-full overflow-hidden flex flex-col justify-center bg-[#0B0B0F]">
        {/* Background Image with motion */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform z-0 ${
            isAnimating
              ? "blur-2xl scale-110 opacity-30"
              : "blur-0 scale-105 opacity-100"
          }`}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title || movie.name || "Hero background"}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] bg-linear-to-r from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay" />

        {/* Content Container */}
        <div
          className={`absolute top-0 bottom-[120px] md:bottom-[150px] left-0 z-20 w-full px-6 md:px-12 lg:px-20 max-w-2xl xl:max-w-3xl flex flex-col justify-end pb-4 md:pb-6 pt-20 transition-all duration-700 ${
            isAnimating
              ? "opacity-0 translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div>
            <h1 className="text-white font-(family-name:--font-playfair) font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] tracking-tight leading-[1.1]">
              {type === "movies"
                ? truncateText(movie.title, 25)
                : truncateText(movie.name, 25)}
            </h1>

            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-[#B3B3B3] mb-5 font-sans font-medium tracking-wide drop-shadow-md">
              <span className="text-white px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold tracking-widest bg-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.5)] uppercase">
                New
              </span>
              <span className="text-[#FFD700] border border-[#FFD700]/30 px-2 rounded-sm bg-[#FFD700]/10 backdrop-blur-sm shadow-[0_0_10px_rgba(255,215,0,0.1)]">
                {movie.vote_average?.toFixed(1) || "NR"}
              </span>
              <span>{year}</span>
              <span className="text-white/20">•</span>
              <span>Action, Drama</span>
              <span className="text-white/20">•</span>
              <span>2h 15m</span>
            </div>

            {/* Overview / Description */}
            <p className="text-gray-200 font-sans text-sm sm:text-base md:text-lg mb-6 max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed font-light opacity-90">
              {truncateText(movie?.overview, 140) ||
                "No description available for this movie."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-auto sm:mt-0 font-sans">
              <Link href={`/${type}/${movie.id}`}>
                <Button
                  size={"xl"}
                  className="cursor-pointer flex items-center space-x-3 bg-[#E50914] hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(229,9,20,0.5)] border border-transparent text-sm md:text-base font-bold tracking-wide"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Watch Now</span>
                </Button>
              </Link>
              <AddToListButton movieId={movie.id} mediaType={type}>
                <span className="w-full text-sm md:text-base font-semibold tracking-wide">
                  Add to List
                </span>
              </AddToListButton>
            </div>
          </div>
        </div>

        {/* Thumbnails Row (Bottom Slider) */}
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-30 px-6 md:px-12 lg:px-20">
          <div
            className="flex items-center gap-6 md:gap-8 overflow-x-auto pb-4 pt-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {movies.map((m, i) => (
              <button
                key={m.id || i}
                onClick={() => changeMovie(i)}
                className={`relative shrink-0 transition-all duration-500 snap-start cursor-pointer group flex flex-col items-center justify-center
                  ${
                    index === i
                      ? "opacity-100 scale-110 drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                      : "opacity-50 hover:opacity-100 hover:scale-105 grayscale-30 hover:grayscale-0"
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
                <div className="w-24 md:w-32 lg:w-44 h-[60px] md:h-[70px] lg:h-[80px] rounded-lg overflow-hidden relative border border-white/10 group-hover:border-[#FFD700]/50 transition-colors">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors z-10" />
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${m.backdrop_path || m.poster_path}`}
                    alt="thumbnail"
                    fill
                    sizes="(max-width: 768px) 100px, 180px"
                    className="object-cover"
                  />

                  {/* Thumb title overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 p-2">
                    <h3
                      className="text-white font-(family-name:--font-playfair) font-bold text-xs md:text-sm lg:text-base tracking-wide leading-tight text-center"
                      style={{
                        textShadow: "0px 2px 8px rgba(0,0,0,0.9)",
                      }}
                    >
                      {type === "series"
                        ? truncateText(m.name, 15)
                        : truncateText(m.title, 15)}
                    </h3>
                  </div>
                </div>

                {/* Gold Underline (Active Indicator) */}
                <div
                  className={`h-[3px] rounded-full transition-all duration-500 mt-3 ${
                    index === i
                      ? "w-16 bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.8)]"
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
