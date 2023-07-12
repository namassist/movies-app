import { createSlice } from "@reduxjs/toolkit";
import findMovie from "../utils/findMovie";
import unmatchedMovies from "../utils/unmatchedMovies";

const initialState = {
  favoriteMovies: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { movie } = action.payload;

      const isMovieAxist = findMovie(state.favoriteMovies, movie.imdbID);

      if (!isMovieAxist) {
        state.favoriteMovies.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      const { movieId } = action.payload;

      state.favoriteMovies = unmatchedMovies(state.favoriteMovies, movieId);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
