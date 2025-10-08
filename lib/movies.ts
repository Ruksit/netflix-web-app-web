export type Movie = {
  id: number;
  title: string;
  overview?: string;
  release_date?: string;
  backdrop_path?: string | null;
  poster_path?: string | null;
};

export async function fetchPopularMovies() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/movies/popular`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch popular movies: ${res.status}`);
  }
  return (await res.json()) as Movie[];
}