import { MoviesList } from "@/features/movies-list"
import { usePopularMovies } from "@entities/popular-movies"

export function PopularMoviesPreview() {
  const { popularMovies } = usePopularMovies({ page: 1 })

  return <MoviesList title="Popular movies" movies={popularMovies} />
}
