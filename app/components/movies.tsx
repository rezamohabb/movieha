import {
  MovieNotFound,
  MovieContainer,
  MovieThumbnail,
  MoviesContainer,
  DeleteMovieButton,
  MovieDetailsContainer,
} from "@/app/components";
import prisma from "@/app/lib/prisma";
import { deleteMovie } from "@/app/lib/actions";

const Movies = async () => {
  const movies = await prisma.movie.findMany();

  if (movies.length === 0) return <MovieNotFound />;

  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieContainer key={movie.id}>
          <MovieThumbnail
            alt={movie.title}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${movie.thumbnail}`}
          />
          <MovieDetailsContainer className="gap-x-2">
            <h2 className="font-medium group-hover:text-gray-600 transition-all line-clamp-1">
              {movie.title}
            </h2>
            <form action={deleteMovie} className="shrink-0 flex items-center">
              <input type="hidden" name="movieId" value={movie.id} />
              <DeleteMovieButton />
            </form>
          </MovieDetailsContainer>
        </MovieContainer>
      ))}
    </MoviesContainer>
  );
};

export default Movies;
