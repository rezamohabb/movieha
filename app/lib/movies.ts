interface Movie {
  id: number;
  title: string;
  thumbnail: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "آدم کش",
    thumbnail: "/movies/the-killer.jpg",
  },
];

export const getMovies = async () => {
  const moviesRequest = await fetch(`${process.env.API_BASE_URL}/api/movies`);
  const moviesResponse: Movie[] = await moviesRequest.json();

  return moviesResponse;
};
