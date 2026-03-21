import ShowMovies from "./ShowContent";

export default function HomeContent({
  movies,
  arMovies,
  turkeyMovies,
  indiaMovies,
  type,
}: {
  movies: any[];
  arMovies: any[];
  turkeyMovies: any[];
  indiaMovies: any[];
  type: "movies" | "tvshow" | "series" | "kids";
}) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <ShowMovies movies={movies} title="Recently Added" type={type} />
      <ShowMovies movies={arMovies} title={`Arabic ${type}`} type={type} />
      <ShowMovies movies={turkeyMovies} title={`Turkey ${type}`} type={type} />
      <ShowMovies movies={indiaMovies} title={`India ${type}`} type={type} />
    </main>
  );
}
