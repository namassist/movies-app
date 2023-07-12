/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/api";

const searchMoviesByTitle = createAsyncThunk("movies/search", async ({ title }) => {
  try {
    const response = await getMovies({ title });

    if (response.data.Response === "False") {
      throw(response.data.Error);
    }
    
    return response.data.Search;
    
  } catch(error) {
    throw(error);
  }
});

const initialState = {
  loading: false,
  searchResults: [],
  errorMessages: '',
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchMoviesByTitle.pending, (state) => {
      state.loading = true;
      state.searchResults = [];
      state.errorMessages = '';
    })
    .addCase(searchMoviesByTitle.fulfilled, (state, action) => {
      state.loading = false;
      state.searchResults = action.payload;
    })
    .addCase(searchMoviesByTitle.rejected, (state, action) => {
      state.loading = false;
      state.errorMessages = action.error.message;
    })
  }
});

export { searchMoviesByTitle };
export default searchSlice.reducer;