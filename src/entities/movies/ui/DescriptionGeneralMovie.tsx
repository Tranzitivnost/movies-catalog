import clsx from "clsx"
import { Container, Header } from "@shared/ui"
import styles from "./DescriptionGeneralMovie.module.css"
import type { Movie } from "@shared/api"

type Props = {
  movie: Movie
  className?: string
}

export function DescriptionGeneralMovie({ movie, className }: Props) {
  return (
    <Container
      flexDirectionColumn
      className={clsx(styles.container, className)}
    >
      <Header className={styles.title}>{movie.title}</Header>
    </Container>
  )
}
