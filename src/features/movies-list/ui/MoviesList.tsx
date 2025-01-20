import { Container, Header, Text } from "@shared/ui"
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
      justifyAround
      gap="24px"
      className={styles.container}
    >
      <Header className={styles.title}>{title}</Header>
      <Container justifyCenter flexWrap justifyBetween gap="16px">
        {movies.length > 0 ? (
          movies.map(movie => <MoviePreview movie={movie} key={movie.id} />)
        ) : (
          <Text className={styles.warning} children="No available films" />
        )}
      </Container>
    </Container>
  )
}
