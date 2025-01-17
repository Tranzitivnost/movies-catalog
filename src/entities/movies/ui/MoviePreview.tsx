import clsx from "clsx"
import { Container, Header } from "@shared/ui"
import styles from "./MoviePreview.module.css"
import type { Movie } from "@shared/api"
import Star from "@/shared/ui/assets/Star.svg"
import { Image } from "@/shared/ui"

type Props = {
  movie: Movie
  className?: string
}

export function MoviePreview({ movie, className }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      className={clsx(styles.container, className)}
    >
      <Container className={styles.imageContainer}>
        <Image
          className={styles.img}
          src={movie.poster_path}
          alt={movie.title}
        />
      </Container>

      <Header className={styles.movieTitle}>{movie.title}</Header>
      <Container className={styles.starContainer}>
        <Image className={styles.imgStar} src={Star} alt="star-logo" />
        <Header className={styles.popularity}>{movie.vote_average}</Header>
      </Container>
    </Container>
  )
}
