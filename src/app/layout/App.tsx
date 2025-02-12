import "./reset-styles.css"
import { Providers } from "../providers"
import { AppRouter } from "../routes"

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}
