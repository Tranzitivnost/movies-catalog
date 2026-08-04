import { Container, Header, Text, Link, Layout } from "@shared/ui";
import { MoviePreview } from "@entities/movies";
import styles from "./MoviesList.module.scss";
import type { Movie } from "@/shared/api";
import { Routes } from "@/shared/routes";

type Props = {
  movies: Movie[];
  title: string;
  ref?: React.Ref<HTMLDivElement>;
};

export function MoviesList({ movies, title, ref }: Props) {
  return (
    <Layout
      container
      flexDirectionColumn
      alignStart
      justifyAround
      gap="24px"
      className={styles.container}
      ref={ref}
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
    </Layout>
  );
}
