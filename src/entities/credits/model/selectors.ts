import { createSelector } from "@reduxjs/toolkit";

const selectMovieCastState = (state: RootState) => state.movieCast;

export const selectCastByMovieId = (movieId: number | undefined) =>
  createSelector([selectMovieCastState], movieCast => {
    if (movieId === undefined) {
      return [];
    }

    return movieCast.castsById[movieId] ?? [];
  });

export const selectMovieCastLoading = createSelector(
  [selectMovieCastState],
  movieCast => movieCast.loading,
);

export const selectMovieCastError = createSelector(
  [selectMovieCastState],
  movieCast => movieCast.error,
);
