import clsx from "clsx"
import { Container, Header } from "@shared/ui"
import styles from "./GeneralMoviePreview.module.css"
import type { Movie } from "@shared/api"

type Props = {
  movie: Movie
  className?: string
}

export function GeneralMoviePreview({ movie, className }: Props) {
  return (
    <Container
      flexDirectionColumn
      className={clsx(styles.container, className)}
    >
      <img className={styles.img} src={movie.backdrop_path} alt={movie.title} />
      <Header>{movie.title}</Header>
    </Container>
  )
}
