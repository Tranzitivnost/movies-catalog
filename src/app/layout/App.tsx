import "./reset-styles.css"
import { Providers } from "../providers"
import { AppRouter } from "../routes"
import { AppHeader } from "../app-header"
import { Container } from "@/shared/ui"
import styles from "./App.module.css"
import { PosterMovie } from "@/features/popular-movies/ui/PosterMovie"

export const App = () => {
  return (
    <Providers>
      <Container className={styles.page}>
        <PosterMovie>
          <AppHeader />
        </PosterMovie>
        <AppRouter />
      </Container>
    </Providers>
  )
}
