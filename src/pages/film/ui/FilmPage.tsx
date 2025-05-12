import { Container } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./FilmPage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movie";
import { MoviesList } from "@/features/movies-list";
import { Divider } from "@shared/ui";

type Props = {
  id?: number;
};

export function FilmPage({ id }: Props) {
  const currentYear = new Date().getFullYear();
  const { popularMovies } = usePopularMovies({
    page: 1,
    sort_by: "vote_count.desc",
    primary_release_year: currentYear,
  });
  const currentFilm = popularMovies?.find(movie => movie.id === id);

  return (
    <Container className={styles.container}>
      <PageHeader positionAbsolute />
      {currentFilm && (
        <PosterMovie movie={currentFilm} className={styles.posterContainer} />
      )}
      <Divider />
      <PageFooter />
    </Container>
  );
}
