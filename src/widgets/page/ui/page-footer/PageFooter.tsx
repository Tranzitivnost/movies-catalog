import { Container, Header } from "@shared/ui"
import styles from "./PageFooter.module.css"
import { Link } from "@shared/ui"
import { Text } from "@shared/ui"

export function PageFooter() {
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
          <p>Our platform is trusted </p>
          <p> by millions & features </p>
          <p> best updated movies </p>
          <p>all around the world. </p>
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

        <Header className={styles.secondTitle}>© 2025</Header>
      </Container>
    </Container>
  )
}
