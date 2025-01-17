import styles from "./PosterMovie.module.css"
import type { Movie } from "@/shared/api"
import { Container } from "@shared/ui"
import { Image } from "@/shared/ui"
import { Header } from "@shared/ui"
import { Button } from "@shared/ui"
import { Text } from "@shared/ui"
import Like from "@/shared/ui/assets/Icon_Like.svg"
import clsx from "clsx"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  movie: Movie
  children?: React.ReactNode
  className?: string
}

export function PosterMovie({ movie, className }: Props) {
  return (
    <Container container flexDirectionColumn alignCenter justifyBetween>
      <Container
        container
        flexDirectionColumn
        alignCenter
        justifyCenter
        className={styles.generalContainer}
      >
        <Container className={styles.gradient} />
        <Container
          container
          flexDirectionColumn
          justifyCenter
          alignCenter
          className={styles.generalMovie}
        >
          <Image
            className={styles.img}
            src={movie.backdrop_path}
            alt={movie.title}
            key={movie.id}
          />
        </Container>
        <Container
          container
          flexDirectionColumn
          justifyEnd
          alignStart
          className={clsx(styles.titleContainer, className)}
        >
          <Header className={styles["second-title"]}>{movie.title}</Header>
          <Header className={styles.date}>
            original language: {movie.original_language} • {movie.release_date}{" "}
            • viewings: {movie.popularity} • average score: {movie.vote_average}
          </Header>
          <Container>
            <Button className={styles.firstButton}>Add Watchlist</Button>
            <Button className={styles.secondButton}>
              <Image
                src={Like}
                alt="icon-like"
                className={styles["second-img"]}
              />
              Like
            </Button>
          </Container>
        </Container>
      </Container>
      <Container
        container
        flexDirectionColumn
        justifyAround
        className={styles.summary}
      >
        <Header className={styles.storyTitle}>Story Line</Header>
        <Text className={styles.text}>{movie.overview}</Text>
      </Container>
    </Container>
  )
}
