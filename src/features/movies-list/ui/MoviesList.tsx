import { Container, Header } from "@shared/ui"
import { MoviePreview } from "@entities/movies"
import styles from "./MoviesList.module.css"
import type { Movie } from "@/shared/api"

type Props = {
  movies: Movie[]
  title: string
}

export function MoviesList({ movies, title }: Props) {
  return (
    <Container
      flexDirectionColumn
      alignStart
      justifyCenter
      gap="16px"
      className={styles.container}
    >
      <Header className={styles.title}>Popular Movies for you</Header>
      <Container justifyStart flexWrap gap="16px">
        {movies.map(movie => (
          <MoviePreview movie={movie} key={movie.id} />
        ))}
      </Container>
    </Container>
  )
}
