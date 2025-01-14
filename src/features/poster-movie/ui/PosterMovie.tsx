import { Container } from "@shared/ui"
import { PreviewPosterMovie } from "@/entities/movies"
import styles from "./PosterMovie.module.css"
import { usePopularMovies } from "@entities/popular-movies"
import { DescriptionPosterMovie } from "@/entities/movies"
import { SummaryPosterMovie } from "@/entities/movies"
import type { Movie } from "@/shared/api"
import { Image } from "@/shared/ui"
import clsx from "clsx"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  movies: Movie[]
  children?: React.ReactNode
  className?: string
}

export function PosterMovie({ children, movies, className }: Props) {
  const { popularMovies } = usePopularMovies({ page: 1 })

  return (
    <Container container flexDirectionColumn alignStart justifyCenter>
      <Container
        container
        flexDirectionColumn
        alignCenter
        justifyCenter
        className={styles.generalContainer}
      >
        {children}
        <Container className={styles.gradient}></Container>
        {movies.length > 0 && (
          <Container
            container
            flexDirectionColumn
            className={clsx(styles.container, styles.generalMovie)}
          >
            <Image
              className={styles.img}
              src={movies[0].backdrop_path}
              alt={movies[0].title}
              key={movies[0].id}
            />
          </Container>
        )}
        {popularMovies.length > 0 && (
          <DescriptionPosterMovie movie={movies[0]} key={movies[0].id} />
        )}
      </Container>
      {popularMovies.length > 0 && (
        <SummaryPosterMovie movie={movies[0]} key={movies[0].id} />
      )}
    </Container>
  )
}
