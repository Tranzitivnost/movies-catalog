import clsx from "clsx";
import { Container, Header, Link } from "@shared/ui";
import styles from "./MoviePreview.module.css";
import type { Movie } from "@shared/api";
import Star from "@/shared/ui/assets/Star.svg";
import { Image } from "@/shared/ui";
import { Routes } from "@/shared/routes";

type Props = {
  movie: Movie;
  className?: string;
};

export function MoviePreview({ movie, className }: Props) {
  return (
    <Link to={Routes.FILM(movie.id)} className={styles.link}>
      <Container
        container
        flexDirectionColumn
        className={clsx(styles.container, className)}
      >
        <Image
          className={styles.img}
          src={movie.poster_path}
          alt={movie.title}
        />
        <Container flexDirectionColumn className={styles.movieContainer}>
          <Header className={styles.movieTitle}>{movie.title}</Header>
          <Container className={styles.starContainer}>
            <Image className={styles.imgStar} src={Star} alt="star-logo" />
            <Header className={styles.popularity}>{movie.vote_average}</Header>
          </Container>
        </Container>
      </Container>
    </Link>
  );
}
