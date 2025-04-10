import { Container } from "@shared/ui";
import { PageHeader } from "@/widgets/page";
import styles from "./ContactPage.module.css";

import { ContactInformation } from "@/widgets/information";

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
