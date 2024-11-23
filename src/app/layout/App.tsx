import "./reset-styles.css"
import { Providers } from "../providers"
import { AppRouter } from "../routes"
import { AppHeader } from "../app-header"

export const App = () => {
  return (
    <Providers>
      <AppHeader />
      <AppRouter />
    </Providers>
  )
}
