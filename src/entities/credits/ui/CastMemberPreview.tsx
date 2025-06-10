import clsx from "clsx";
import { Container, Header, Image } from "@shared/ui";
import styles from "./CastMemberPreview.module.css";
import type { CastMember } from "@shared/api";

type Props = {
  actor: CastMember;
  className?: string;
};

export function CastMemberPreview({ actor, className }: Props) {
  return (
    <Container
      justifyCenter
      gap="12px"
      className={clsx(styles.actorContainer, className)}
    >
      <Image className={styles.img} src={actor.profile_path} alt={actor.name} />
      <Container
        justifyCenter
        flexDirectionColumn
        alignStart
        className={styles.headerContainer}
      >
        <Header className={styles.actorName}>{actor.name}</Header>
        <Header className={styles.character}>{actor.character}</Header>
      </Container>
    </Container>
  );
}
