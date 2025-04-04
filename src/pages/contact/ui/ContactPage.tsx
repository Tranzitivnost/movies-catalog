import { Container } from "@shared/ui";
import { PageHeader } from "@/widgets/page";
import { Image } from "@/shared/ui";
import styles from "./ContactPage.module.css";
import Poster from "@/shared/ui/assets/poster.png";

import { ContactInformation } from "@/widgets/information";

export function ContactPage() {
  return (
    <Container container flexDirectionColumn justifyBetween alignCenter>
      <PageHeader positionAbsolute />
      <Container className={styles.gradient} />
      <Image className={styles["movie-poster"]} src={Poster} alt="poster" />
      <ContactInformation className={styles.information} />
    </Container>
  );
}
