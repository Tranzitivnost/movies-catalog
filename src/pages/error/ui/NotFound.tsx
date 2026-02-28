import { Container, Text } from "@shared/ui";
import { PageHeader, FooterBottom } from "@/widgets/pages";
import styles from "./NotFound.module.scss";

import { Header } from "@shared/ui";

import { Layout } from "@shared/ui";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export function NotFound({ className }: Props) {
  return (
    <Container
      container
      flexDirectionColumn
      justifyBetween
      alignCenter
      className={styles.container}
    >
      <PageHeader positionAbsolute />
      <Container
        alignCenter
        container
        justifyCenter
        flexDirectionColumn
        gap="8px"
        className={styles.messageContainer}
      >
        <Header className={styles.title}>404</Header>
        <Text className={styles.message}>
          THIS PAGE IS UNDER CONSTRUCTION 🚧
        </Text>
      </Container>
      <Layout>
        <FooterBottom />
      </Layout>
    </Container>
  );
}
