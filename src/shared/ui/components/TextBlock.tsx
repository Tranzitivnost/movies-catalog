import styles from "./TextBlock.module.scss";
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
    <Container
      container
      flexDirectionColumn
      justifyBetween
      alignStart
      className={className}
    >
      <Text className={styles.contactTitle}>{header}</Text>
      <Text className={styles.contactInfo}>{description}</Text>
    </Container>
  );
}
