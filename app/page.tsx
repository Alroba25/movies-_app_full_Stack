import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import PromoSection from "@/components/PromoSection";
import KidsSection from "@/components/KidsSection";
import Navbar from "@/components/Navbar";
import {
  getTrendingMovies,
  getMoviesByCountry,
  getTrendingSeries,
  getSeriesByCountry,
} from "@/lib/tmdb.actions";
import SeriesSection from "@/components/SeriseSeaction";

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const trendingSeries = await getTrendingSeries();
  const top10Movies = trendingMovies.slice(0, 10);
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <div>
          <HomeHero movie={top10Movies[6]} />
          <PromoSection movies={trendingMovies} />
          <SeriesSection movies={trendingSeries} />
          <KidsSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
