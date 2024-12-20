import styles from "./AppHeader.module.css"
import { Image } from "@/shared/ui/components/Image"
import Logo from "@/shared/ui/assets/Component-logo.svg"
import { Container } from "@/shared/ui"
import Bell from "@/shared/ui/assets/Icon_Outline_bell.svg"
import Search from "@/shared/ui/assets/Icon_Outline_search.svg"
import { Link } from "@/shared/ui"

export function AppHeader() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo"></Image>
      <Container className={styles.buttonContainer}>
        <a href="/" className={styles.linkDecoration}>
          Home
        </a>
        <a href="/movie_release" className={styles.linkDecoration}>
          Movie Release
        </a>
        <a href="/about" className={styles.linkDecoration}>
          About
        </a>
        <a href="/contact" className={styles.linkDecoration}>
          Contact
        </a>
      </Container>
      <Container className={styles.iconContainer}>
        <Image src={Search} alt="button-search" />
        <Image src={Bell} alt="button-bell"></Image>
      </Container>
    </header>
  )
}
