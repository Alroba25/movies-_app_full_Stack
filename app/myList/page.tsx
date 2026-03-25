import { getMyList } from "@/lib/actions/mylistActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Play } from "lucide-react";
import { truncateText } from "@/lib/utils";
import RemoveFromListButton from "@/components/RemoveFromListButton";

export default async function MyListPage() {
  const myList = await getMyList();

  // Filter out any potential fetch failures
  const moviesResponses = await Promise.all(
    myList.map((item: any) => {
      const endpoint = item.mediaType === "tv" ? "tv" : "movie";
      return fetch(
        `https://api.themoviedb.org/3/${endpoint}/${item.movieId}?api_key=${process.env.TMDB_API_KEY}`,
        { next: { revalidate: 3600 } }
      ).then((res) => {
        if (!res.ok) return null;
        return res.json().then(data => ({ ...data, mylist_media_type: endpoint })).catch(() => null);
      });
    }),
  );
  
  const movies = moviesResponses.filter(Boolean);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col font-sans selection:bg-[#FFD700]/30 relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#1A1A24] via-[#0B0B0F] to-[#0B0B0F] -z-10" />
      <Navbar activePage="mylist" />
      
      <main className="grow pt-28 pb-20 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[1600px] w-full mx-auto relative z-10">
        <div className="mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-(family-name:--font-playfair) text-white tracking-tight drop-shadow-lg mb-2">
            My List
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl">
            Your personal collection of movies and series. Keep track of what you want to watch next.
          </p>
        </div>

        {movies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-300 mb-4 font-(family-name:--font-playfair)">Your list is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven't added any movies or series to your list yet. Start exploring to build your collection.</p>
            <Link href="/movies" className="px-8 py-4 rounded-full font-bold text-white bg-[#E50914] hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(229,9,20,0.4)]">
              Explore Movies
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {movies.map((movie: any) => (
              <Link href={movie.mylist_media_type === 'tv' ? `/series/${movie.id}` : `/movies/${movie.id}`} key={movie.id} className="group relative rounded-xl overflow-hidden aspect-2/3 shadow-lg hover:shadow-2xl hover:shadow-[#FFD700]/20 transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-white/20 block">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <RemoveFromListButton movieId={movie.id} />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E50914] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(229,9,20,0.5)]">
                      <Play className="w-5 h-5 fill-white text-white ml-1" />
                    </div>
                    <h3 className="font-bold text-white mb-1 font-(family-name:--font-playfair) leading-tight">
                      {truncateText(movie.title || movie.name || "Unknown", 25)}
                    </h3>
                    {movie.vote_average ? (
                      <span className="text-xs font-semibold text-[#FFD700] bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
                        ★ {movie.vote_average.toFixed(1)}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
