import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./popularMoviesThunk";
import type { Movie } from "@shared/api";
import type { ErrorType } from "@shared/error";

type PopularMoviesState = {
  moviesByPage: Record<number, Movie[]>;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: ErrorType | null;
};

const initialState: PopularMoviesState = {
  moviesByPage: {},
  currentPage: 1,
  totalPages: 0,
  loading: false,
  error: null,
};

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovies.pending, state => {
        state.loading = true;
      })

      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        const { movies, page, totalPages } = action.payload;

        state.moviesByPage[page] = movies;
        state.currentPage = page;
        state.totalPages = totalPages;
        state.loading = false;
      })

      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.error = action.payload as ErrorType;
        state.loading = false;
      });
  },
});
export const { setPage } = popularMoviesSlice.actions;

export const popularMoviesSliceReducer = popularMoviesSlice.reducer;
