import {
  MovieNotFound,
  MovieContainer,
  MoviesContainer,
  MovieDetailsContainer,
} from "@/app/components";
import Image from "next/image";
import prisma from "@/app/lib/prisma";
import { CgTrash } from "react-icons/cg";

const Movies = async () => {
  const movies = await prisma.movie.findMany();

  if (movies.length === 0) return <MovieNotFound />;

  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieContainer key={movie.id}>
          <Image
            width={160}
            height={220}
            alt={movie.title}
            src={movie.thumbnail}
            className="w-full rounded-2xl group-hover:brightness-75 transition-all h-[220px]"
          />
          <MovieDetailsContainer className="gap-x-2 items-center">
            <h2 className="font-medium group-hover:text-gray-600 transition-all line-clamp-1">
              {movie.title}
            </h2>
            <CgTrash className="w-5 h-5 shrink-0 hover:text-red-600 cursor-pointer transition-all text-gray-400" />
          </MovieDetailsContainer>
        </MovieContainer>
      ))}
    </MoviesContainer>
  );
};

export default Movies;
