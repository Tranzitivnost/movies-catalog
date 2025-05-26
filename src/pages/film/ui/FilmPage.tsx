import { Container } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./FilmPage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movie";
import { Divider } from "@shared/ui";
import { useParams } from "react-router-dom";
import { ImageSlider } from "@/widgets/page";
import { MoviePreview } from "@/entities/movies";
import type { Movie } from "@/shared/api";

type Props = {
  movies: Movie[];
};

export function FilmPage({ movies }: Props) {
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
      <ImageSlider>
        {popularMovies.map((movie, index) => (
          <MoviePreview
            key={index}
            movie={movie}
            className={styles.moviePreview}
          />
        ))}
      </ImageSlider>
      <Divider />
      <PageFooter />
    </Container>
  );
}
