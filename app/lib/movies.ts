export interface Movie {
  id: number;
  title: string;
  thumbnail: string;
}

export const getMovies = async () => {
  const moviesRequest = await fetch(`${process.env.BASE_URL}/api/movies`);
  const movies: Movie[] = await moviesRequest.json();

  return movies;
};
