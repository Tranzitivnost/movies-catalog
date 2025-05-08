import { Container, Header } from "@shared/ui";
import styles from "./PageFooter.module.css";
import { Link } from "@shared/ui/components/Link";
import { Text } from "@shared/ui";
import { Routes } from "@shared/routes";
import { FooterBottom } from "@/entities/footer";

export function PageFooter() {
  return (
    <Container
      container
      justifyBetween
      flexDirectionColumn
      className={styles.container}
    >
      <Container container justifyBetween className={styles.titleContainer}>
        <Header className={styles.title}>
          <p>Our platform is trusted </p>
          <p> by millions & features </p>
          <p> best updated movies </p>
          <p>all around the world. </p>
        </Header>
        <Container container alignEnd className={styles.linksContainer}>
          <Link to={Routes.HOME} className={styles.linkDecoration}>
            Home
          </Link>
          <Text className={styles.text}>/</Text>
          <Link to={Routes.ABOUT} className={styles.linkDecoration}>
            About
          </Link>
          <Text className={styles.text}>/</Text>
          <Link to={Routes.CONTACT} className={styles.linkDecoration}>
            Contact
          </Link>
        </Container>
      </Container>
      <FooterBottom />
    </Container>
  );
}
