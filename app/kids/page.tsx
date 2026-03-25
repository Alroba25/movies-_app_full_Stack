import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import HomeContent from "@/components/HomeContent";
import Navbar from "@/components/Navbar";
import {
  getKidsMovies,
  getKidsSeriesByCountry,
} from "@/lib/tmdb.actions";

export default async function MoviesPage() {
  const movies = await getKidsMovies();
  const top10Movies = movies.slice(0, 10);
  const arMovies = await getKidsSeriesByCountry("ar");
  const turkeyMovies = await getKidsSeriesByCountry("tr");
  const indiaMovies = await getKidsSeriesByCountry("hi");
  return (
    <div>   
      <Navbar activePage="kids" />
      <main className="flex min-h-screen w-full flex-col">
        <div>
          <HeroSlider movies={top10Movies} type="kids" />
          <HomeContent
            movies={movies}
            arMovies={arMovies}
            turkeyMovies={turkeyMovies}
            indiaMovies={indiaMovies}
            type="kids"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
