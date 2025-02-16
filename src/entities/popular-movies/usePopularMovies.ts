import { selectPopularMovies } from ".";

import { useAppSelector, useAppDispatch } from "@shared/lib";

import { fetchPopularMovies } from ".";
import { useEffect } from "react";
import type { GetPopularMoviesQueryType } from "@shared/api";

export function usePopularMovies(options?: GetPopularMoviesQueryType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies(options));
  }, []);

  return useAppSelector(selectPopularMovies);
}
