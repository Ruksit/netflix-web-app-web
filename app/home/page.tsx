import Image from "next/image";
import { fetchPopularMovies } from "../../lib/movies";
import { Button } from "@/components/ui/button";
import MoviesRow from "@/components/PoppularMoviesRow";

function upsizeTmdb(
  url?: string | null,
  kind: "backdrop" | "poster" = "backdrop"
) {
  if (!url) return null;
  const target = kind === "backdrop" ? "original" : "w780";
  return url.replace(/\/(w\d+|original)\//, `/${target}/`);
}

export default async function HomePage() {
  const movies = await fetchPopularMovies();
  const first = movies?.[0];

  if (!first) {
    return <main className="p-6 text-gray-300">No movies found.</main>;
  }

  const img =
    upsizeTmdb(first.backdrop_path, "backdrop") ??
    upsizeTmdb(first.poster_path, "poster");

  if (!img) {
    return <div className="p-6 text-gray-300">No image for: {first.title}</div>;
  }

  return (
    <>
      <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start  lg:items-center ">
        <Image
          src={img}
          alt={first.title}
          width={1920}
          height={1080}
          priority
          className="w-full absolute top-0 h-[60vh] object-cover -z-10 brightness-[60%]"
        />

        <div className="absolute w-[90%] lg:w-[40%] pl-5 md:pl-15 md:pb-15">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            {first.title}
          </h1>
          <p className="text-white text-lg mt-3 line-clamp-3">
            {first.overview}
          </p>
          <div className="flex gap-x-3 mt-4">
            <Button variant="secondary">Play</Button>
            <Button variant="secondary">More Info</Button>
          </div>
        </div>
      </div>
      <div>
        <MoviesRow movies={movies.filter((m) => m.id)} title="Popular Movies" />
      </div>
    </>
  );
}
