import { Container, Header } from "@shared/ui";
import styles from "./PageFooter.module.css";
import { Link } from "react-router-dom";
import { Text } from "@shared/ui";
import { Routes } from "@shared/routes";

export function PageFooter() {
  return (
    <Container
      alignStart
      container
      justifyBetween
      gap="16px"
      className={styles.container}
    >
      <Container
        container
        flexDirectionColumn
        justifyBetween
        alignStart
        className={styles.titleContainer}
      >
        <Header className={styles.title}>
          <p>Our platform is trusted </p>
          <p> by millions & features </p>
          <p> best updated movies </p>
          <p>all around the world. </p>
        </Header>
        <Container
          container
          justifyBetween
          className={styles.secondTitleContainer}
        >
          <Text className={styles.secondTitle}>Privacy policy</Text>
          <Text className={styles.secondTitle}>Term of service</Text>
        </Container>
      </Container>
      <Container
        container
        flexDirectionColumn
        justifyEnd
        alignEnd
        className={styles.thirdTitleContainer}
      >
        <Container container className={styles.anotherTitleContainer}>
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

        <Text className={styles.secondTitle}>© 2025</Text>
      </Container>
    </Container>
  );
}
