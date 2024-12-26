import clsx from "clsx"
import { Container } from "@shared/ui"
import styles from "./GeneralMoviePreview.module.css"
import type { Movie } from "@shared/api"
import { Image } from "@/shared/ui/components/Image"

type Props = {
  movie: Movie
  className?: string
}

export function GeneralMoviePreview({ movie, className }: Props) {
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
