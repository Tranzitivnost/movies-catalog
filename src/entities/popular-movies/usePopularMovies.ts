import { selectPopularMovies } from "."

import { useAppSelector } from "../../shared/lib"

import { fetchPopularMovies } from "."
import { useAppDispatch } from "../../shared/lib"
import { useEffect } from "react"
import type { GetPopularMoviesQueryType } from "../../shared/api"

export function usePopularMovies(options?: GetPopularMoviesQueryType) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPopularMovies(options))
  }, [])

  return useAppSelector(selectPopularMovies)
}
