import { Button } from "@shared/ui"
import styles from "./AddWatchListButton.module.css"

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode
}

export function AddWatchListButton({ children }: Props) {
  return <Button className={styles.addButton}>Add Watchlist</Button>
}
