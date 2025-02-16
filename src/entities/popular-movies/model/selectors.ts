import { createSelector } from "@reduxjs/toolkit";

export const selectPopularMovies = createSelector(
  (state: RootState) => state,
  state => state.popularMovies,
);
