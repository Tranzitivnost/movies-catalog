import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/lib";
import { fetchMovieCredits } from "@entities/credits";
import { selectCastByMovieId } from "@entities/credits";

export function useMovieCredits(
  movieId: number | undefined,
  language?: string,
) {
  const dispatch = useAppDispatch();

  const castSelector = selectCastByMovieId(movieId);
  const cast = useAppSelector(castSelector);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieCredits({ movieId, language }));
    }
  }, [movieId, language]);

  return cast;
}
