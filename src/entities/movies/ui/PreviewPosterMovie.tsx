import clsx from "clsx"
import { Container } from "@shared/ui"
import styles from "./PreviewPosterMovie.module.css"
import type { Movie } from "@shared/api"
import { Image } from "@/shared/ui"

type Props = {
  movie: Movie
  className?: string
}

export function PreviewPosterMovie({ movie, className }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      className={clsx(styles.container, className)}
    >
      <Image
        className={styles.img}
        src={movie.backdrop_path}
        alt={movie.title}
      />
    </Container>
  )
}
