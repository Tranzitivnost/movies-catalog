// import styles from "./App.module.css" // TODO delete styles?
import "./reset-styles.css"
import { Providers } from "../providers"
import { AppHeader } from "../../widgets"
import { AppRouter } from "../routes"

const App = () => {
  return (
    <Providers>
      <AppHeader />
      <AppRouter />
    </Providers>
  )
}

export default App
