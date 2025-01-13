import { MoviesList } from "@/features/movies-list"

import type { Movie } from "@/shared/api"
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  movies: Movie[]
  children?: React.ReactNode
  className?: string
}

export function PopularMoviesPreview({ children, movies, className }: Props) {
  return <MoviesList title="Popular movies" movies={movies} />
}
