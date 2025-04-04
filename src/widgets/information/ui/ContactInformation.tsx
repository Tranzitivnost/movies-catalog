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
          <Text className={styles.contactTitle}>CONTACT US</Text>
          <Text className={styles.contactInfo}>+381 98 765 4321</Text>
        </Container>

        <Container container flexDirectionColumn justifyBetween alignStart>
          <Text className={styles.contactTitle}>ADDRESS</Text>
          <Text className={styles.contactInfo}>
            1071 Fifth Avenue at 89th Street Manhattan, New York City
          </Text>
        </Container>

        <Container container flexDirectionColumn justifyBetween alignStart>
          <Text className={styles.contactTitle}>
            YOUR QUESTIONS AND SPECIAL REQUESTS ARE ALWAYS WELCOME! 🚀🎉
          </Text>
          <Text className={styles.contactInfo}>
            saintstream_support@gmail.com
          </Text>
        </Container>
      </Container>
      <Container container justifyBetween className={styles.secondContainer}>
        <Container container justifyBetween className={styles.footer}>
          <Text className={styles.secondTitle}>Privacy policy</Text>
          <Text className={styles.secondTitle}>Term of service</Text>
        </Container>
        <Text className={styles.secondTitle}>© 2025</Text>
      </Container>
    </Container>
  );
}
