import { Container } from "@shared/ui"
import { PopularMoviesPreview } from "@features/popular-movies"
import { Footer } from "@/features/popular-movies/ui/Footer"
import styles from "./HomePage.module.css"
import { SummaryMovie } from "@/entities/movies/ui/SummaryMovie"
import { usePopularMovies } from "@entities/popular-movies"

export function HomePage() {
  const { popularMovies } = usePopularMovies({ page: 1 })
  return (
    <Container className={styles.container}>
      {popularMovies.length > 0 && (
        <SummaryMovie movie={popularMovies[0]} key={popularMovies[0].id} />
      )}
      <PopularMoviesPreview />
      <Footer />
    </Container>
  )
}
