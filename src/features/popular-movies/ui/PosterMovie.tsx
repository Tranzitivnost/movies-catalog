import { Container } from "@shared/ui"
import { GeneralMoviePreview } from "@entities/movies/ui/GeneralMoviePreview"
import styles from "./PosterMovie.module.css"
import { usePopularMovies } from "@entities/popular-movies"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  className?: string
}

export function PosterMovie({ children, className }: Props) {
  const { popularMovies } = usePopularMovies({ page: 1 })

  return (
    <Container
      flexDirectionColumn
      alignStart
      justifyContentCenter
      className={styles.generalContainer}
    >
      {children}
      <Container className={styles.gradient}></Container>
      {popularMovies.length > 0 && (
        <GeneralMoviePreview
          movie={popularMovies[0]}
          key={popularMovies[0].id}
          className={styles.generalMovie}
        />
      )}
    </Container>
  )
}
