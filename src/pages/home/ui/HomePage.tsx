import { Container, Layout } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/pages";
import styles from "./HomePage.module.scss";
import { usePopularMovies } from "@entities/popular-movies";
import { PosterMovie } from "@/features/poster-movies";
import { MoviesList } from "@/features/movies-lists";
import { Divider } from "@shared/ui";
import { Pagination } from "@shared/ui/components/Pagination";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/lib";
import { setPage } from "@entities/popular-movies";

export function HomePage() {
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => dispatch(setPage(page))}
      />
      <MoviesList title="Popular movies for you" movies={movies} />

      <Divider />
      <Layout variant="main">
        <PageFooter />
      </Layout>
    </Container>
  );
}
