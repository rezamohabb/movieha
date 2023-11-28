import {
  MovieContainer,
  MoviesContainer,
  MovieDetailsContainer,
} from "@/app/components";

const MoviesSkeleton = () => (
  <MoviesContainer>
    {[...new Array(7)].map((_, index) => (
      <MovieContainer key={index}>
        <div className="w-full h-[220px] bg-gray-200 rounded-2xl animate-pulse" />
        <MovieDetailsContainer>
          <div className="h-5 bg-gray-200 w-1/2 animate-pulse rounded-md" />
          <div className="w-5 h-5 shrink-0 bg-gray-200 rounded-md animate-pulse" />
        </MovieDetailsContainer>
      </MovieContainer>
    ))}
  </MoviesContainer>
);

export default MoviesSkeleton;
