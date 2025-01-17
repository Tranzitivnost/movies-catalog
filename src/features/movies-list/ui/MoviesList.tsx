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
      container
      flexDirectionColumn
      alignStart
      justifyCenter
      gap="24px"
      className={styles.container}
    >
      <Header className={styles.title}>{title}</Header>
      <Container justifyStart flexWrap gap="16px">
        {movies.length > 0
          ? movies.map(movie => <MoviePreview movie={movie} key={movie.id} />)
          : "No available films"}
      </Container>
    </Container>
  )
}
