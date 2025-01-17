import { Button } from "@shared/ui"
import { Image } from "@shared/ui"
import styles from "./LikeButton.module.css"
import Like from "@/shared/ui/assets/Icon_Like.svg"

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode
}

export function LikeButton({ children }: Props) {
  return (
    <Button className={styles.likeButton}>
      <Image src={Like} alt="icon-like" className={styles["like-img"]} />
      Like
    </Button>
  )
}
