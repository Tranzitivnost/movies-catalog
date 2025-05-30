import { Container, Link } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./FilmPage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movie";
import { Divider } from "@shared/ui";
import { useParams } from "react-router-dom";
import { Slider } from "@/widgets/page";
import { MoviePreview } from "@/entities/movies";
import { Routes } from "@/shared/routes";

export function FilmPage() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

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
      <Slider className={styles.slider}>
        {popularMovies.map((movie, index) => (
          <Link to={Routes.GET_FILM_URL(movie.id)} className={styles.link}>
            <MoviePreview
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              key={index}
              movie={movie}
              className={styles.moviePreview}
            />
          </Link>
        ))}
      </Slider>
      <Divider />
      <PageFooter />
    </Container>
  );
}
