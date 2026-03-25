"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

interface MovieCardProps {
  movie: any;
  type?: "movies" | "tvshow" | "series" | "kids";
}

export default function MovieCard({ movie, type = "movies" }: MovieCardProps) {
  return (
    <div className="group/card relative shrink-0 w-[160px] h-[240px] md:w-[220px] md:h-[330px] bg-[#12121A] rounded-xl overflow-visible cursor-pointer snap-start transition-all duration-500 hover:z-30 hover:-translate-y-4 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5 hover:ring-[#FFD700]/30">
      <Link
        href={`/${type}/${movie.id}`}
        className="block w-full h-full relative rounded-xl overflow-hidden"
      >
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/Images/no-poster.png"
          }
          alt={movie.title || movie.name || "Movie poster"}
          fill
          sizes="(max-width: 768px) 160px, 220px"
          className="object-cover transition-transform duration-700 group-hover/card:scale-110"
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
  );
}
