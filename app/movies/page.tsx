import HeroSlider from "@/components/HeroSlider";
import HomeContent from "@/components/HomeContent";
import Navbar from "@/components/Navbar";
import { getTrendingMovies } from "@/lib/tmdb.actions";

export default async function MoviesPage() {
  const movies = await getTrendingMovies();
  const top10Movies = movies.slice(0, 10);
  return (
    <div>
      <Navbar activePage="movies" />
      <main className="flex min-h-screen w-full flex-col">
        <div>
          <HeroSlider movies={top10Movies} />
          <HomeContent movies={movies} />
        </div>
      </main>
    </div>
  );
}
