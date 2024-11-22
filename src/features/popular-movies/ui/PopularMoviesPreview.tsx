import { Container, Header } from "../../../shared/ui"
import { MoviePreview } from "../../../entities/movies"
import styles from "./PopularMoviewPreview.module.css"
import { usePopularMovies } from "../../../entities/popular-movies"

export function PopularMoviesPreview() {
  const { popularMovies } = usePopularMovies({ page: 1 })

  return (
    <Container
      flexDirectionColumn
      alignStart
      gap="16px"
      className={styles.container}
    >
      <Header>Popular Movies:</Header>
      <Container flexWrap gap="16px">
        {popularMovies.map(movie => (
          <MoviePreview movie={movie} key={movie.id} />
        ))}
      </Container>
    </Container>
  )
}
