import { Container, Layout } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/pages";
import styles from "./HomePage.module.scss";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movies";
import { MoviesList } from "@/features/movies-lists";
import { Divider } from "@shared/ui";
import { Pagination } from "@shared/ui/components/Pagination";
import { useAppDispatch, useAppSelector } from "@shared/lib";
import { setPage } from "@entities/popular-movies";
import { useRef } from "react";

export function HomePage() {
  const moviesRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const currentYear = new Date().getFullYear();
  const { movies } = usePopularMovies({
    page: 1,
    sort_by: "vote_count.desc",
    primary_release_year: currentYear,
  });
  const firstMovie = useAppSelector(
    state => state.popularMovies.moviesByPage[1]?.[0],
  );
  const { currentPage, totalPages } = useAppSelector(
    state => state.popularMovies,
  );
  const handlePageChange = (page: number) => {
    dispatch(setPage(page));

    moviesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
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
      <MoviesList
        title="Popular movies for you"
        movies={movies}
        ref={moviesRef}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Divider />
      <Layout variant="main">
        <PageFooter />
      </Layout>
    </Container>
  );
}
