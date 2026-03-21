import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import HomeContent from "@/components/HomeContent";
import Navbar from "@/components/Navbar";
import { getMoviesByCountry, getTrendingMovies } from "@/lib/tmdb.actions";

export default async function MoviesPage() {
  const movies = await getTrendingMovies();
  const top10Movies = movies.slice(0, 10);
  const arMovies = await getMoviesByCountry("ar");
  const turkeyMovies = await getMoviesByCountry("tr");
  const indiaMovies = await getMoviesByCountry("hi");
  return (
    <div>
      <Navbar activePage="movies" />
      <main className="flex min-h-screen w-full flex-col">
        <div>
          <HeroSlider movies={top10Movies} type="movies" />
          <HomeContent
            movies={movies}
            arMovies={arMovies}
            turkeyMovies={turkeyMovies}
            indiaMovies={indiaMovies}
            type="movies"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
