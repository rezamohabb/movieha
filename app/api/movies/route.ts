import type { Movie } from "@/app/lib/movies";

const movies: Movie[] = [
  {
    id: 1,
    title: "آدم کش",
    thumbnail: "/movies/the-killer.jpg",
  },
];

export const GET = () => Response.json(movies);
