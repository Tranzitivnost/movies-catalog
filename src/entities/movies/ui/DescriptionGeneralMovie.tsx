import clsx from "clsx"
import { Container, Header } from "@shared/ui"
import styles from "./DescriptionGeneralMovie.module.css"
import type { Movie } from "@shared/api"
import { Button } from "@shared/ui"
import { Image } from "@/shared/ui/components/Image"
import Like from "@/shared/ui/assets/Icon_Like.svg"
import { Text } from "@shared/ui"

type Props = {
  movie: Movie
  className?: string
}

export function DescriptionGeneralMovie({ movie, className }: Props) {
  return (
    <Container
      flexDirectionColumn
      className={clsx(styles.titleContainer, className)}
    >
      <Header className={styles.title}>{movie.title}</Header>
      <Header className={styles.date}>
        original language: {movie.original_language} • {movie.release_date} •
        viewings: {movie.popularity} • average score: {movie.vote_average}
      </Header>
      <Container>
        <Button className={styles.firstButton}>Add Watchlist</Button>
        <Button className={styles.secondButton}>
          <Image src={Like} alt="icon-like" className={styles.img}></Image>Like
        </Button>
      </Container>
    </Container>
  )
}
