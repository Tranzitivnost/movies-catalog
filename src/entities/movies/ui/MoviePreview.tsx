import clsx from "clsx"
import { Container, Header } from "../../../shared/ui"
import styles from "./MoviePreview.module.css"
import type { Movie } from "../../../shared/api"

type Props = {
  movie: Movie
  className?: string
}

export function MoviePreview({ movie, className }: Props) {
  return (
    <Container
      flexDirectionColumn
      alignCenter
      className={clsx(styles.container, className)}
    >
      <img className={styles.img} src={movie.poster_path} alt={movie.title} />
      <Header>{movie.title}</Header>
    </Container>
  )
}
