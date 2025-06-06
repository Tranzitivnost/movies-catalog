import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/lib";
import { fetchMovieCast } from "@entities/credits";
import { selectCastByMovieId } from "@entities/credits";

export function useMovieCredits(movieId: number, language?: string) {
  const dispatch = useAppDispatch();

  const castSelector = selectCastByMovieId(movieId);
  const cast = useAppSelector(castSelector);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCast({ movieId, language }));
    }
  }, [dispatch, movieId, language]);

  return cast;
}
