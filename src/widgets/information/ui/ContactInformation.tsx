import { Container, Header } from "@shared/ui";
import styles from "./ContactInformation.module.css";
import { Link } from "@shared/ui";
import { Text } from "@shared/ui";

export function ContactInformation() {
  return (
    <Container
      alignStart
      container
      justifyBetween
      flexDirectionColumn
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
          <p>Best site to watch movies around the world</p>
        </Header>
        <Container
          container
          flexDirectionColumn
          justifyBetween
          alignStart
          className={styles.information}
        >
          <Container container flexDirectionColumn justifyBetween alignStart>
            <Header className={styles.phoneTitle}>CONTACT US</Header>
            <Header className={styles.phone}>+381 98 765 4321</Header>
          </Container>

          <Container container flexDirectionColumn justifyBetween alignStart>
            <Header className={styles.phoneTitle}>ADDRESS</Header>
            <Header className={styles.phone}>
              1071 Fifth Avenue at 89th Street Manhattan, New York City
            </Header>
          </Container>

          <Container container flexDirectionColumn justifyBetween alignStart>
            <Header className={styles.phoneTitle}>
              YOUR QUESTIONS AND SPECIAL REQUESTS ARE ALWAYS WELCOME! 🚀🎉
            </Header>
            <Header className={styles.phone}>
              saintstream_support@gmail.com
            </Header>
          </Container>
        </Container>
        <Container
          container
          justifyBetween
          className={styles.secondTitleContainer}
        >
          <Container
            container
            justifyBetween
            className={styles.anotherTitleContainer}
          >
            <Header className={styles.secondTitle}>Privacy policy</Header>
            <Header className={styles.secondTitle}>Term of service</Header>
          </Container>
          <Header className={styles.secondTitle}>© 2025</Header>
        </Container>
      </Container>
    </Container>
  );
}
