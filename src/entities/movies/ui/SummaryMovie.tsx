import { Container, Header } from "@shared/ui"
import styles from "./SummaryMovie.module.css"
import type { Movie } from "@shared/api"
import { Text } from "@shared/ui"

type Props = {
  movie: Movie
  className?: string
}

export function SummaryMovie({ movie }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      justifyAround
      className={styles.summary}
    >
      <Header className={styles.storyTitle}>Story Line</Header>
      <Text className={styles.text}>{movie.overview}</Text>
    </Container>
  )
}
