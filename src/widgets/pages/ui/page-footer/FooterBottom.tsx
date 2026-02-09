import styles from "./FooterBottom.module.scss";
import { Container, Text } from "@shared/ui";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export function FooterBottom({ className }: Props) {
  return (
    <Container
      container
      justifyBetween
      alignCenter
      className={styles.secondContainer}
    >
      <Container container justifyBetween className={styles.footer}>
        <Text className={styles.firstTitle}>Privacy policy</Text>
        <Text className={styles.firstTitle}>Term of service</Text>
      </Container>
      <Text className={styles.secondTitle}>© 2026</Text>
    </Container>
  );
}
