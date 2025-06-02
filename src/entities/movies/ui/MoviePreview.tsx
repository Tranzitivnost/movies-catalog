import clsx from "clsx";
import { Container, Header, Image } from "@shared/ui";
import styles from "./MoviePreview.module.css";
import type { Movie } from "@shared/api";
import { StarIcon } from "@/shared/ui";

type Props = {
  movie: Movie;
  className?: string;
  onClick: () => void;
};

export function MoviePreview({ movie, className, onClick }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      className={clsx(styles.container, className)}
      onClick={onClick}
    >
      <Image className={styles.img} src={movie.poster_path} alt={movie.title} />
      <Container flexDirectionColumn className={styles.movieContainer}>
        <Header className={styles.movieTitle}>{movie.title}</Header>
        <Container className={styles.starContainer}>
          <Image className={styles.imgStar} src={StarIcon} alt="star-logo" />
          <Header className={styles.popularity}>{movie.vote_average}</Header>
        </Container>
      </Container>
    </Container>
  );
}
