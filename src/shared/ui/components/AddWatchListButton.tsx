import { Button } from "@shared/ui";
import styles from "./AddWatchListButton.module.scss";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
}

export function AddWatchListButton({ children, className, ...rest }: Props) {
  return (
    <Button {...rest} className={clsx([className, styles.addButton])}>
      Add Watchlist
    </Button>
  );
}
