import { Button } from "@shared/ui";
import { Image } from "@shared/ui";
import styles from "./LikeButton.module.css";
import { LikeIcon } from "@/shared/ui";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
}

export function LikeButton({ children }: Props) {
  return (
    <Button className={styles.likeButton}>
      <Image src={LikeIcon} alt="icon-like" className={styles["like-img"]} />
      Like
    </Button>
  );
}
