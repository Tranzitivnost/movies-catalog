import { Container, Header } from "@shared/ui"

import styles from "./Footer.module.css"

import { Link } from "react-router-dom"
import { Image } from "@/shared/ui/components/Image"
import { Text } from "@shared/ui"

export function Footer() {
  return (
    <Container
      alignStart
      justifyContentCenter
      gap="16px"
      className={styles.container}
    >
      <Container className={styles.titleContainer}>
        <Header className={styles.title}>
          Our platform is trusted by millions & features best updated movies all
          around the world.
        </Header>
        <Container className={styles.secondTitleContainer}>
          <Header className={styles.secondTitle}>Privacy policy</Header>
          <Header className={styles.secondTitle}>Term of service</Header>
        </Container>
      </Container>
      <Container className={styles.thirdTitleContainer}>
        <Container className={styles.anotherTitleContainer}>
          <Link to="Home" className={styles.linkDecoration}>
            Home
          </Link>
          <Text className={styles.text}>/</Text>
          <Link to="Home" className={styles.linkDecoration}>
            About
          </Link>
          <Text className={styles.text}>/</Text>
          <Link to="Home" className={styles.linkDecoration}>
            Contact
          </Link>
        </Container>

        <Header className={styles.secondTitle}>© 2024</Header>
      </Container>
    </Container>
  )
}
