import { Container } from "@shared/ui"
import { PopularMoviesPreview } from "@features/popular-movies"
import { Footer } from "@/features/popular-movies/ui/Footer"
import styles from "./HomePage.module.css"

export function HomePage() {
  return (
    <Container className={styles.container}>
      <PopularMoviesPreview />
      <Footer />
    </Container>
  )
}
