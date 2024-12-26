import { Container, Header } from "@shared/ui"
import { MoviePreview } from "@entities/movies"
import styles from "./PopularMoviewPreview.module.css"
import { usePopularMovies } from "@entities/popular-movies"

export function PopularMoviesPreview() {
  const { popularMovies } = usePopularMovies({ page: 1 })

  return (
    <Container
      flexDirectionColumn
      alignStart
      justifyCenter
      gap="16px"
      className={styles.container}
    >
      <Header className={styles.title}>Popular Movies for you</Header>
      <Container flexWrap justifyBetween gap="16px">
        {popularMovies.map(movie => (
          <MoviePreview movie={movie} key={movie.id} />
        ))}
      </Container>
    </Container>
  )
}
