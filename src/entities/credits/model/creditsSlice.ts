import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieCredits } from "./creditsThunk";
import type { CastMember } from "@shared/api";
import type { ErrorType } from "@shared/error";

type MovieCastState = {
  castsById: Record<number, CastMember[]>;
  loading: boolean;
  error: ErrorType | null;
};

const initialState: MovieCastState = {
  castsById: {},
  loading: false,
  error: null,
};

const movieCastSlice = createSlice({
  name: "movieCast",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovieCredits.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        const { movieId, cast } = action.payload;
        state.castsById[movieId] = cast;
        state.loading = false;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as ErrorType;
      });
  },
});

export const movieCastSliceReducer = movieCastSlice.reducer;
