import { useEffect } from "react";
import { useAppSelector } from "@shared/lib";
import { fetchMovieCredits } from "@entities/credits";
import { selectCastByMovieId } from "@entities/credits";

export function useMovieCredits(
  movieId: number | undefined,
  language?: string,
) {
  const castSelector = selectCastByMovieId(movieId);
  const cast = useAppSelector(castSelector);

  useEffect(() => {
    if (movieId) {
      fetchMovieCredits({ movieId, language });
    }
  }, [movieId, language]);

  return cast;
}
