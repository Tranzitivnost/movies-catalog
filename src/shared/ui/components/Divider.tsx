import styles from "./Divider.module.scss";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  className?: string;
}

export const Divider = ({ className }: Props) => {
  return <span className={clsx([styles.line, className])}></span>;
};
