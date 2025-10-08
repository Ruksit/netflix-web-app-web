"use client";

import Image from "next/image";
import type { Movie } from "../lib/movies";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function upsizeTmdb(
  url?: string | null,
  kind: "poster" | "backdrop" = "poster"
) {
  if (!url) return null;
  const target = kind === "poster" ? "w500" : "w780";
  return url.replace(/\/(w\d+|original)\//, `/${target}/`);
}

export default function MoviesRow({
  movies,
  title,
}: {
  movies: Movie[];
  title?: string;
}) {
  return (
    <section className="px-5  sm:px-6 lg:px-8 w-full mb-4 ">

      {title && <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>}

      <ScrollArea className="w-full rounded-md">
        <div className="flex w-max gap-3 p-2">
          {movies.map((m) => {
            const src =
              upsizeTmdb(m.poster_path, "poster") ??
              upsizeTmdb(m.backdrop_path, "backdrop");
            if (!src) return null;

            return (
              <figure key={m.id} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={src}
                    alt={m.title}
                    width={200}
                    height={300}
                    className="aspect-[2/3] h-auto w-auto object-cover"
                  />
                </div>
              </figure>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}