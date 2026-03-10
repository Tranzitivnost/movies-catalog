import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@shared/lib";
import { fetchPopularMovies } from ".";
import type { GetPopularMoviesQueryType } from "@shared/api";

export function usePopularMovies(options?: GetPopularMoviesQueryType) {
  const dispatch = useAppDispatch();

  const { moviesByPage, currentPage, loading, totalPages } = useAppSelector(
    state => state.popularMovies,
  );

  const movies = moviesByPage[currentPage] ?? [];

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchPopularMovies({ ...options, page: currentPage }));
    }
  }, [currentPage]);

  return {
    movies,
    currentPage,
    totalPages,
    loading,
  };
}
