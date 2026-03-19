import RecentlyAdd from "./RecentlyAdd";

export default function HomeContent({ movies }: { movies: any[] }) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <RecentlyAdd movies={movies} />
    </main>
  );
}
