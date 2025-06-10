import { Container, Header, Image } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/pages";
import styles from "./HomePage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movies";
import { MoviesList } from "@/features/movies-lists";
import { Divider } from "@shared/ui";
import { useMovieCredits, CastMemberPreview } from "@entities/credits";

export function HomePage() {
  const currentYear = new Date().getFullYear();
  const { popularMovies } = usePopularMovies({
    page: 1,
    sort_by: "vote_count.desc",
    primary_release_year: currentYear,
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
