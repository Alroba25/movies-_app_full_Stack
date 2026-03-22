import ShowContent from "./ShowContent";

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
      <ShowContent movies={movies} title="Recently Added" type={type} />
      <ShowContent movies={arMovies} title={`Arabic ${type}`} type={type} />
      <ShowContent movies={turkeyMovies} title={`Turkey ${type}`} type={type} />
      <ShowContent movies={indiaMovies} title={`India ${type}`} type={type} />
    </main>
  );
}
