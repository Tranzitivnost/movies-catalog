import { Container, Layout } from "@shared/ui";
import { PageHeader, FooterBottom } from "@/widgets/pages";
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
      <Layout>
        <FooterBottom />
      </Layout>
    </Container>
  );
}
