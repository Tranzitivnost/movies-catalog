import { Container } from "@shared/ui"
import { PopularMoviesPreview } from "@/widgets/popular-movies"
import { PageFooter, PageHeader } from "@/widgets/page"
import styles from "./HomePage.module.css"
import { usePopularMovies } from "@entities/popular-movies"
import { PosterMovie } from "@/features/poster-movie"

export function HomePage() {
  const { popularMovies } = usePopularMovies({ page: 1 })
  return (
    <Container className={styles.container}>
      <PageHeader />
      <PosterMovie movies={popularMovies} />
      <PopularMoviesPreview movies={popularMovies} />
      <PageFooter />
    </Container>
  )
}
