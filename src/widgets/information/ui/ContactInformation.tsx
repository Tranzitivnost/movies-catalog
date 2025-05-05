import { Container, Header } from "@shared/ui";
import styles from "./ContactInformation.module.css";
import { Text } from "@shared/ui";
import clsx from "clsx";
import { FooterBottom } from "@/entities/footer";
import { TextBlock } from "@/entities/text-block";

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
        Best site to watch movies around the world
      </Header>
      <Container
        container
        flexDirectionColumn
        justifyBetween
        alignStart
        className={styles.information}
      >
        <TextBlock header="CONTACT US" information="+381 98 765 4321" />
        <TextBlock
          header="ADDRESS"
          information="1071 Fifth Avenue at 89th Street Manhattan, New York City"
        />
        <TextBlock
          header="YOUR QUESTIONS AND SPECIAL REQUESTS ARE ALWAYS WELCOME! 🚀🎉"
          information="saintstream_support@gmail.com"
        />
      </Container>
      <FooterBottom />
    </Container>
  );
}
