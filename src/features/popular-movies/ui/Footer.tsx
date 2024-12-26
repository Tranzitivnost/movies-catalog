import { Container, Header } from "@shared/ui"
import styles from "./Footer.module.css"
import { Link } from "@shared/ui"
import { Text } from "@shared/ui"

export function Footer() {
  return (
    <Container
      alignStart
      container
      justifyBetween
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
          Our platform is trusted by millions & features best updated movies all
          around the world.
        </Header>
        <Container
          container
          justifyBetween
          className={styles.secondTitleContainer}
        >
          <Header className={styles.secondTitle}>Privacy policy</Header>
          <Header className={styles.secondTitle}>Term of service</Header>
        </Container>
      </Container>
      <Container
        container
        flexDirectionColumn
        justifyEnd
        alignEnd
        className={styles.thirdTitleContainer}
      >
        <Container container className={styles.anotherTitleContainer}>
          <Link href="#" className={styles.linkDecoration}>
            Home
          </Link>
          <Text className={styles.text}>/</Text>
          <Link href="#" className={styles.linkDecoration}>
            About
          </Link>
          <Text className={styles.text}>/</Text>
          <Link href="#" className={styles.linkDecoration}>
            Contact
          </Link>
        </Container>

        <Header className={styles.secondTitle}>© 2024</Header>
      </Container>
    </Container>
  )
}
