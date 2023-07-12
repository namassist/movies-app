export default function findMovie(movies, movieId) {
  return movies.find((movie) => movie.imdbID === movieId);
}