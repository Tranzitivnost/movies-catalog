import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./popularMoviesThunk";
import type { Movie } from "@shared/api";
import type { ErrorType } from "@shared/error";

type PopularMoviesState = {
  popularMovies: Movie[];
  loading: boolean;
  error: ErrorType | null;
};

const initialState: PopularMoviesState = {
  popularMovies: [],
  loading: false,
  error: null,
};

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPopularMovies.rejected, (state, action) => {
      state.error = action.payload as ErrorType;
      state.loading = false;
    });
    builder.addCase(fetchPopularMovies.pending, state => {
      state.loading = true;
    });
  },
});

export const popularMoviesSliceReducer = popularMoviesSlice.reducer;
