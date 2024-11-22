import styles from "./App.module.css"
import { Container } from "./Container"

import { Switch } from "./Switch"
import clsx from "clsx"

type Props = {
  onChange: (value: boolean) => void
  defaultValue: boolean
  children: React.ReactNode
}

export const App = ({ onChange, defaultValue, children }: Props) => {
  return (
    <Container
      className={clsx([styles.app])}
      alignCenter
      justifyContentCenter
      flexDirectionColumn
    >
      <Switch
        className={styles.switch}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {children}
    </Container>
  )
}
