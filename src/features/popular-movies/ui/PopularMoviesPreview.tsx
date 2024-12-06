import { Container, Header } from "@shared/ui"
import { MoviePreview } from "@entities/movies"
import styles from "./PopularMoviewPreview.module.css"
import { usePopularMovies } from "@entities/popular-movies"
import { Button } from "@shared/ui"

export function PopularMoviesPreview() {
  const { popularMovies } = usePopularMovies({ page: 1 })

  return (
    <Container
      flexDirectionColumn
      alignStart
      justifyContentCenter
      gap="16px"
      className={styles.container}
    >
      <Container>
        <Button>Add Watchlist</Button>
        <Button>Add Watchlist</Button>
        <Button>Add Watchlist</Button>
      </Container>
      <Header>Popular Movies:</Header>
      <Container flexWrap justifyBetween gap="16px">
        {popularMovies.map(movie => (
          <MoviePreview movie={movie} key={movie.id} />
        ))}
      </Container>
    </Container>
  )
}
