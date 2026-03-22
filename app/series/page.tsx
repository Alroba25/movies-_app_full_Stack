import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import HomeContent from "@/components/HomeContent";
import Navbar from "@/components/Navbar";
import { getSeriesByCountry, getTrendingSeries } from "@/lib/tmdb.actions";

export default async function SeriesPage() {
  const series = await getTrendingSeries();
  const top10Series = series.slice(0, 10);
  const arSeries = await getSeriesByCountry("ar");
  const turkeySeries = await getSeriesByCountry("tr");
  const indiaSeries = await getSeriesByCountry("hi");
  return (
    <div>
      <Navbar activePage="series" />
      <main className="flex min-h-screen w-full flex-col">
        <div>
          <HeroSlider movies={top10Series} type="series" />
          <HomeContent
            movies={series}
            arMovies={arSeries}
            turkeyMovies={turkeySeries}
            indiaMovies={indiaSeries}
            type="series"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
