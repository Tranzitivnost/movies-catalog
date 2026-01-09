import styles from "./PosterMovie.module.css";
import type { Movie } from "@/shared/api";
import { Container } from "@shared/ui";
import { Image } from "@/shared/ui";
import { Header } from "@shared/ui";
import { LikeButton } from "@shared/ui";
import { AddWatchListButton } from "@shared/ui";
import { NoImagePlaceholder } from "@/shared/ui";
import { Text } from "@shared/ui";

import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  movie: Movie;
  children?: React.ReactNode;
  className?: string;
}

export function PosterMovie({ movie, className }: Props) {
  const sentences = movie.overview
    .match(/[^.!?]+[.!?]+|\w+$/g)
    ?.map((sentence, index) => (
      <p className={styles.storyText} key={index}>
        {sentence.trim()}
      </p>
    ));

  return (
    <Container
      container
      flexDirectionColumn
      alignCenter
      justifyCenter
      className={styles.posterContainer}
    >
      <Container
        container
        flexDirectionColumn
        alignCenter
        justifyCenter
        className={clsx(styles.generalContainer, className)}
      >
        <Container className={styles.gradient} />

        <Image
          className={styles["movie-img"]}
          src={movie.backdrop_path}
          alt={movie.title}
          key={movie.id}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = NoImagePlaceholder;
            //You can check it out in the film "Tempi supplementari"
            e.currentTarget.onerror = null;
          }}
        />

        <Container
          container
          flexDirectionColumn
          justifyEnd
          alignStart
          className={styles.titleContainer}
        >
          <Header className={styles["movie-title"]}>{movie.title}</Header>
          <Header className={styles.information}>
            Original language: {movie.original_language} • {movie.release_date}{" "}
            • Viewings: {movie.popularity} • Average score: {movie.vote_average}
          </Header>
          <Container>
            <AddWatchListButton />
            <LikeButton />
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

        <Text className={styles.storyText}>{sentences}</Text>
      </Container>
    </Container>
  );
}
