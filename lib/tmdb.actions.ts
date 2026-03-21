export async function getTrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`,
  );

  const data = await res.json();

  return data.results;
}
export async function getMoviesByCountry(country: string = "en") {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_original_language=${country}`,
  );

  const data = await res.json();

  return data.results;
}
export async function getMovieById(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos,images`,
  );

  const data = await res.json();

  return data;
}
// Series
export async function getTrendingSeries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API_KEY}`,
  );

  const data = await res.json();

  return data.results;
}
export async function getSeriesByCountry(country: string = "en") {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_original_language=${country}`,
  );

  const data = await res.json();

  return data.results;
}
export async function getSeriesById(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos,images`,
  );

  const data = await res.json();

  return data;
}
