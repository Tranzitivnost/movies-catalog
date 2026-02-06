import { Container } from "@shared/ui";
import { PageHeader } from "@/widgets/pages";
import styles from "./ContactPage.module.scss";

import { ContactInformation } from "@/widgets/pages";

export function ContactPage() {
  return (
    <Container
      container
      flexDirectionColumn
      justifyBetween
      alignCenter
      className={styles.container}
    >
      <PageHeader positionAbsolute />
      <ContactInformation />
    </Container>
  );
}
