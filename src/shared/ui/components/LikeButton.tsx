import { Button } from "@shared/ui";
import { Image } from "@shared/ui";
import styles from "./LikeButton.module.css";
import { LikeIcon } from "@/shared/ui";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  className?: string;
}

export function LikeButton({ children, className, ...rest }: Props) {
  return (
    <Button {...rest} className={clsx([className, styles.likeButton])}>
      <Image src={LikeIcon} alt="icon-like" className={styles["like-img"]} />
      Like
    </Button>
  );
}
