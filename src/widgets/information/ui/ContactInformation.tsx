import { Container, Header } from "@shared/ui";
import styles from "./ContactInformation.module.css";
import { Text } from "@shared/ui";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export function ContactInformation({ className }: Props) {
  return (
    <Container
      alignStart
      container
      justifyBetween
      flexDirectionColumn
      gap="16px"
      className={clsx([styles.container, className])}
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
          <Text className={styles.phone}>+381 98 765 4321</Text>
        </Container>

        <Container container flexDirectionColumn justifyBetween alignStart>
          <Header className={styles.phoneTitle}>ADDRESS</Header>
          <Text className={styles.phone}>
            1071 Fifth Avenue at 89th Street Manhattan, New York City
          </Text>
        </Container>

        <Container container flexDirectionColumn justifyBetween alignStart>
          <Header className={styles.phoneTitle}>
            YOUR QUESTIONS AND SPECIAL REQUESTS ARE ALWAYS WELCOME! 🚀🎉
          </Header>
          <Text className={styles.phone}>saintstream_support@gmail.com</Text>
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
  );
}
