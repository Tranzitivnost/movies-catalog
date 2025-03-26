import { Container } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./HomePage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movie";
import { MoviesList } from "@/features/movies-list";
import { Divider } from "@shared/ui";

export function HomePage() {
  const { popularMovies } = usePopularMovies({
    page: 1,
    sort_by: "vote_count.desc",
    primary_release_year: 2025,
  });
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
      <Divider />
      <MoviesList title="Popular movies for you" movies={popularMovies} />
      <Divider />
      <PageFooter />
    </Container>
  );
}
