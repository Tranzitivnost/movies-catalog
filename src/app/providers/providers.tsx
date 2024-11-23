import { Provider } from "react-redux"
import { store } from "../store"
import type { FC } from "react"

interface IProviders {
  readonly children: React.ReactNode
}

export const Providers: FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
