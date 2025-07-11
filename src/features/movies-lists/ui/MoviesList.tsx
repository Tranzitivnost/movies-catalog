import { Container, Header, Text, Link } from "@shared/ui";
import { MoviePreview } from "@entities/movies";
import styles from "./MoviesList.module.css";
import type { Movie } from "@/shared/api";
import { Routes } from "@/shared/routes";

type Props = {
  movies: Movie[];
  title: string;
};

export function MoviesList({ movies, title }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      alignStart
      justifyAround
      gap="24px"
      className={styles.container}
    >
      <Header className={styles.title}>{title}</Header>
      <Container gap="10px 4%" className={styles.movieContainer}>
        {movies.length > 0 ? (
          movies.map(movie => (
            <Link
              to={Routes.GET_FILM_URL(movie.id)}
              className={styles.link}
              key={movie.id}
            >
              <MoviePreview
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                movie={movie}
                key={movie.id}
              />
            </Link>
          ))
        ) : (
          <Text className={styles.warning}>No available films</Text>
        )}
      </Container>
    </Container>
  );
}
