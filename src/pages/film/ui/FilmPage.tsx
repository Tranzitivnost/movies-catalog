import { Container, Link, Header } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/pages";
import styles from "./FilmPage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movies";
import { Divider } from "@shared/ui";
import { useParams } from "react-router-dom";
import { Slider } from "@/widgets/pages";
import { MoviePreview } from "@/entities/movies";
import { Routes } from "@/shared/routes";

import { CastMemberPreview, useMovieCredits } from "@/entities/credits";

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

  const cast = useMovieCredits(currentFilm?.id);

  return (
    <Container
      container
      flexDirectionColumn
      justifyBetween
      className={styles.container}
    >
      <PageHeader positionAbsolute />
      {currentFilm && (
        <PosterMovie movie={currentFilm} className={styles.posterContainer} />
      )}

      <Header className={styles.sliderHeader}>Top cast</Header>
      <Slider key={currentFilm?.id} className={styles.slider} gap="12px">
        {
          cast.map(actor => (
            <CastMemberPreview actor={actor} key={actor.id} />
          )) as JSX.Element[]
        }
      </Slider>

      <Header className={styles.sliderHeader}>Movies</Header>
      <Slider className={styles.slider} gap="32px">
        {popularMovies.map((movie, index) => (
          <Link
            to={Routes.GET_FILM_URL(movie.id)}
            className={styles.link}
            key={index}
          >
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
