import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@shared/lib";
import { fetchMovieCredits } from "@entities/credits";
import { selectCastByMovieId } from "@entities/credits";

export function useMovieCredits(
  movieId: number | undefined,
  language?: string,
) {
  const castSelector = selectCastByMovieId(movieId);
  const cast = useAppSelector(castSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCredits({ movieId, language }));
    }
  }, [movieId, language]);

  return cast;
}
