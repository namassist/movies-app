/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../features/favoritesSlice";
import findMovie from "../../utils/findMovie";

export default function FavoritesButton({ className, movie }) {
  const dispatch = useDispatch();
  const { favoriteMovies } = useSelector((state) => state.favorites);

  const handleFavoritesClick = (movie) => {
    dispatch(addToFavorites({ movie }));
  }

  const handleUnFavoritesClick = (movieId) => {
    dispatch(removeFromFavorites({ movieId }));
  }

  const isMovieExist = findMovie(favoriteMovies, movie.imdbID);

  if (isMovieExist) {
    return (
      <button
        onClick={() => handleUnFavoritesClick(movie.imdbID)}
        className={className}>
        <i className="fa-solid fa-heart text-slate-300"></i>
      </button>
    );
  } else {
    return (
      <button
        onClick={() => handleFavoritesClick(movie)}
        className={className}>
        <i className="fa-regular fa-heart text-slate-300"></i>
      </button>
    );
  }
}