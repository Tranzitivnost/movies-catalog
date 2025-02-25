import { Container } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./HomePage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movie";
import { MoviesList } from "@/features/movies-list";

export function HomePage() {
  const { popularMovies } = usePopularMovies({ page: 1 });
  const firstMovie = popularMovies?.[0];
  return (
    <Container
      container
      flexDirectionColumn
      justifyBetween
      alignCenter
      className={styles.container}
    >
      <PageHeader positionAbsolute />
      {firstMovie && (
        <PosterMovie movie={firstMovie} className={styles.posterContainer} />
      )}
      <MoviesList title="Popular movies for you" movies={popularMovies} />
      <PageFooter />
    </Container>
  );
}
