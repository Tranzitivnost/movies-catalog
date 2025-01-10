import { Container } from "@shared/ui"
import { PopularMoviesPreview } from "@/widgets/popular-movies"
import { PageFooter, PageHeader } from "@/widgets/page"
import styles from "./HomePage.module.css"
import { SummaryMovie } from "@/entities/movies/ui/SummaryMovie"
import { usePopularMovies } from "@entities/popular-movies"
import { PosterMovie } from "@/features/movies-list/ui/PosterMovie"

export function HomePage() {
  const { popularMovies } = usePopularMovies({ page: 1 })
  return (
    <Container className={styles.container}>
      <PageHeader />
      <PosterMovie />
      {popularMovies.length > 0 && (
        <SummaryMovie movie={popularMovies[0]} key={popularMovies[0].id} />
      )}
      <PopularMoviesPreview />
      <PageFooter />
    </Container>
  )
}
