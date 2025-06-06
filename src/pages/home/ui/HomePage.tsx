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
  const cast = useMovieCredits(950396);
  console.log(cast);
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
      <Container container flexDirectionColumn style={{ padding: "75px" }}>
        <Header>Top cast</Header>
        {cast.length > 0 ? (
          <Container gap="20px" container>
            {cast.map(actor => (
              <CastMemberPreview actor={actor} key={actor.id} />
            ))}
          </Container>
        ) : (
          <p>Нет данных</p>
        )}
      </Container>
      <MoviesList title="Popular movies for you" movies={popularMovies} />
      <Divider />
      <PageFooter />
    </Container>
  );
}
