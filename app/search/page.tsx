import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { searchMovies } from "@/lib/tmdb.actions";
import { SearchX } from "lucide-react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  const movies = await searchMovies(query);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col font-sans">
      <Navbar />

      <main className="grow pt-32 pb-20 px-4 sm:px-6 lg:px-10 max-w-(screen-2xl) mx-auto w-full">
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold font-(family-name:--font-playfair) text-white tracking-tight drop-shadow-2xl flex items-center gap-4">
            Search Results
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Showing results for:{" "}
            <span className="text-[#FFD700] font-semibold italic">
              "{query}"
            </span>
          </p>
        </div>

        {/* Results Grid */}
        {movies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="bg-[#12121A] p-8 rounded-full mb-6 border border-white/5 shadow-2xl">
              <SearchX size={64} className="text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              No results found
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-lg">
              We couldn't find any movies matching "{query}". Please try a
              different search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {movies.map((movie: any) => (
              <div key={movie.id} className="flex justify-center">
                <MovieCard movie={movie} type="movies" />
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
