import { Container, Header, Layout } from "@shared/ui";
import styles from "./ContactInformation.module.scss";
import clsx from "clsx";

import { TextBlock } from "@/shared/ui";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export function ContactInformation({ className }: Props) {
  return (
    <Layout
      container
      alignCenter
      justifyCenter
      flexDirectionColumn
      gap="16px"
      className={clsx([styles.container, className])}
    >
      <Header className={styles.title}>
        Best site to watch movies around the world
      </Header>
      <Container
        container
        alignStart
        flexDirectionColumn
        justifyBetween
        className={styles.information}
      >
        <TextBlock header="CONTACT US" description="+381 62 82 31 230" />
        <TextBlock header="ADDRESS" description="11000 Belgrade, Serbia" />
        <TextBlock
          header="YOUR QUESTIONS AND SPECIAL REQUESTS ARE ALWAYS WELCOME! 🚀🎉"
          description="savitskaia.tina@gmail.com"
        />
      </Container>
    </Layout>
  );
}
