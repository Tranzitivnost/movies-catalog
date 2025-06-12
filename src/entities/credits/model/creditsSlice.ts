import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieCast } from "./creditsThunk";
import type { CastMember } from "@shared/api";

type MovieCastState = {
  castsById: Record<number, CastMember[]>;
  loading: boolean;
  error: string | null;
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
      .addCase(fetchMovieCast.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieCast.fulfilled, (state, action) => {
        const { movieId, cast } = action.payload;
        state.castsById[movieId] = cast;
        state.loading = false;
      })
      .addCase(fetchMovieCast.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const movieCastSliceReducer = movieCastSlice.reducer;
