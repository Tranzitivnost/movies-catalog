import { Container, Header, Link, Text } from "@shared/ui";
import styles from "./PageFooter.module.css";
import { Routes } from "@shared/routes";
import { FooterBottom } from "@/widgets/pages";

export function PageFooter() {
  return (
    <Container
      container
      justifyBetween
      flexDirectionColumn
      className={styles.container}
    >
      <Container container justifyBetween className={styles.titleContainer}>
        <Header className={styles.title}>
          <p>
            Our platform is trusted <br />
            by millions & features <br />
            best updated movies <br />
            all around the world.
          </p>
        </Header>
        <Container container alignEnd className={styles.linksContainer}>
          <Link
            to={Routes.HOME}
            className={styles.linkDecoration}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
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
      </Container>
      <FooterBottom />
    </Container>
  );
}
