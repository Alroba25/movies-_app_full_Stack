import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getMovieById } from "@/lib/tmdb.actions";
import { Star, Clock, Calendar, Play, Info } from "lucide-react";
import Link from "next/link";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const movie = await getMovieById(Number(resolvedParams.id));

  // If no movie is found
  if (!movie || !movie.title) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl text-gray-400">Movie not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  // Find the first YouTube trailer
  const trailer = movie.videos?.results?.find(
    (vid: any) => vid.site === "YouTube" && vid.type === "Trailer",
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-yellow-500/30">
      <Navbar />

      <main className="grow pt-16">
        {/* HERO SECTION */}
        <div className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Gradients */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }
              alt={movie.title}
              className="w-full h-full object-cover opacity-30 object-top transition-opacity duration-1000"
            />
            {/* Gradient Overlays for better text readability and cinematic feel */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-[#0a0a0a]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-8 mb-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-20 items-center md:items-start">
              {/* Poster Art */}
              <div className="shrink-0 group perspective-[1000px]">
                <div className="relative w-[240px] sm:w-[300px] md:w-[340px] aspect-2/3 rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Movie Details */}
              <div className="flex-1 flex flex-col gap-6 md:pt-4 max-w-3xl justify-center">
                {/* Title & Tagline */}
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                    {movie.title}
                  </h1>
                  {movie.tagline && (
                    <p className="text-xl md:text-2xl text-yellow-500/90 font-medium italic drop-shadow-md">
                      "{movie.tagline}"
                    </p>
                  )}
                </div>

                {/* Meta Info: Rating, Runtime, Date */}
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium text-gray-200 mt-2">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 shadow-inner transition-colors hover:bg-black/80">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-bold text-lg leading-none">
                      {movie.vote_average?.toFixed(1)}
                    </span>
                    <span className="text-gray-400 text-sm leading-none mt-[2px]">
                      / 10
                    </span>
                  </div>

                  {movie.runtime > 0 && (
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>{movie.runtime} min</span>
                    </div>
                  )}

                  {movie.release_date && (
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{new Date(movie.release_date).getFullYear()}</span>
                    </div>
                  )}
                </div>

                {/* Genres */}
                {movie.genres && movie.genres.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {movie.genres.map((genre: any) => (
                      <span
                        key={genre.id}
                        className="px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-gray-200 transition-colors cursor-pointer backdrop-blur-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Overview */}
                <div className="mt-4 bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-500" /> Plot Summary
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    {movie.overview}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {trailer ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${trailer.key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                      <div className="absolute inset-0 w-full h-full bg-linear-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Play className="w-5 h-5 fill-black relative z-10" />
                      <span className="relative z-10">Watch Trailer</span>
                    </a>
                  ) : (
                    <button className="flex items-center justify-center gap-3 bg-white/5 text-gray-400 px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed border border-white/10 backdrop-blur-sm">
                      <Play className="w-5 h-5" />
                      <span>No Trailer Available</span>
                    </button>
                  )}
                  <Link
                    href="/movies"
                    className="px-8 py-4 rounded-full font-bold text-lg text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm"
                  >
                    Back to Movies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION (Additional Info) */}
        {movie.status || movie.original_language ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {movie.status && (
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center">
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">
                    Status
                  </h4>
                  <p className="text-white font-medium text-lg">
                    {movie.status}
                  </p>
                </div>
              )}
              {movie.original_language && (
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center">
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">
                    Language
                  </h4>
                  <p className="text-white font-medium text-lg uppercase">
                    {movie.original_language}
                  </p>
                </div>
              )}
              {movie.budget > 0 && (
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center">
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">
                    Budget
                  </h4>
                  <p className="text-white font-medium text-lg">
                    ${(movie.budget / 1000000).toFixed(1)}M
                  </p>
                </div>
              )}
              {movie.revenue > 0 && (
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center">
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">
                    Revenue
                  </h4>
                  <p className="text-white font-medium text-lg">
                    ${(movie.revenue / 1000000).toFixed(1)}M
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
