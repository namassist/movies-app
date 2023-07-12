/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDetails } from "../services/api";

const getMovieDetails = createAsyncThunk("movie/details", async ({ movieId }) => {
  try {
    const response = await getDetails({ movieId });

    return response.data;
    
  } catch(error) {
    throw(error);
  }
});

const initialState = {
  loading: false,
  movieDetails: {},
  errorMessages: '',
}

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state) => {
      state.loading = true;
      state.movieDetails = {};
      state.errorMessages = '';
    })
    .addCase(getMovieDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.movieDetails = action.payload;
    })
    .addCase(getMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.errorMessages = action.error.message;
    })
  }
});

export { getMovieDetails };
export default detailSlice.reducer;