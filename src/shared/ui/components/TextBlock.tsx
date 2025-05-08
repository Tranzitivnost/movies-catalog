import styles from "./TextBlock.module.css";
import { Container, Text } from "@shared/ui";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  header: string;
  description: string;
}

export function TextBlock({ className, header, description }: Props) {
  return (
    <Container container flexDirectionColumn justifyBetween alignStart>
      <Text className={styles.contactTitle}>{header}</Text>
      <Text className={styles.contactInfo}>{description}</Text>
    </Container>
  );
}
