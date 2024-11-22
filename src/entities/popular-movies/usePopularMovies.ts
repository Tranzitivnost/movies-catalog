import { selectPopularMovies } from "."

import { useAppSelector } from "../../shared/lib"

import { fetchPopularMovies } from "."
import { useAppDispatch } from "../../shared/lib"
import { useEffect } from "react"

export function usePopularMovies() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPopularMovies({ page: 1 }))
  }, [])

  return useAppSelector(selectPopularMovies)
}
