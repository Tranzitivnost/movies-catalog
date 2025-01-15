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
  movies: Movie[]
  children?: React.ReactNode
  className?: string
}

export function PosterMovie({ movies, className }: Props) {
  return (
    <Container container flexDirectionColumn alignStart justifyCenter>
      <Container
        container
        flexDirectionColumn
        alignCenter
        justifyCenter
        className={styles.generalContainer}
      >
        <Container className={styles.gradient} />
        {movies.length > 0 && (
          <Container
            container
            flexDirectionColumn
            className={clsx(styles.container, styles.generalMovie)}
          >
            <Image
              className={styles.img}
              src={movies[0].backdrop_path}
              alt={movies[0].title}
              key={movies[0].id}
            />
          </Container>
        )}
        {movies.length > 0 && (
          <Container
            container
            flexDirectionColumn
            justifyEnd
            alignStart
            className={clsx(styles.titleContainer, className)}
          >
            <Header className={styles["second-title"]}>
              {movies[0].title}
            </Header>
            <Header className={styles.date}>
              original language: {movies[0].original_language} •{" "}
              {movies[0].release_date} • viewings: {movies[0].popularity} •
              average score: {movies[0].vote_average}
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
        )}
      </Container>
      {movies.length > 0 && (
        <Container
          container
          flexDirectionColumn
          justifyAround
          className={styles.summary}
        >
          <Header className={styles.storyTitle}>Story Line</Header>
          <Text className={styles.text}>{movies[0].overview}</Text>
        </Container>
      )}
    </Container>
  )
}
