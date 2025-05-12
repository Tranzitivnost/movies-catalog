import { Container } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./FilmPage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movie";
import { Divider } from "@shared/ui";
import { useParams } from "react-router-dom";

export function FilmPage() {
  const { id } = useParams<{ id: string }>(); // получаем id из URL
  const numericId = Number(id); // приводим к числу

  const currentYear = new Date().getFullYear();
  const { popularMovies } = usePopularMovies({
    page: 1,
    sort_by: "vote_count.desc",
    primary_release_year: currentYear,
  });
  const currentFilm = popularMovies?.find(movie => movie.id === numericId);

  return (
    <Container
      container
      flexDirectionColumn
      justifyBetween
      alignCenter
      className={styles.container}
    >
      <PageHeader positionAbsolute />
      {currentFilm && (
        <PosterMovie movie={currentFilm} className={styles.posterContainer} />
      )}
      <Divider />
      <PageFooter />
    </Container>
  );
}
