import clsx from "clsx";
import { Container, Header, Image } from "@shared/ui";
import styles from "./CastMemberPreview.module.css";
import type { CastMember } from "@shared/api";

type Props = {
  actor: CastMember;
  className?: string;
  onClick?: () => void;
};

export function CastMemberPreview({ actor, className, onClick }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      className={clsx(styles.container, className)}
      onClick={onClick}
    >
      <Image className={styles.img} src={actor.profile_path} alt={actor.name} />
      <Container flexDirectionColumn className={styles.headerContainer}>
        <Header className={styles.actorName}>{actor.name}</Header>
        <Header className={styles.character}>{actor.character}</Header>
      </Container>
    </Container>
  );
}
