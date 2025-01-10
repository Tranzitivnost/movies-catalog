import styles from "./PageHeader.module.css"
import { Image } from "@/shared/ui/components/Image"
import Logo from "@/shared/ui/assets/Component-logo.svg"
import { Container } from "@/shared/ui"
import Bell from "@/shared/ui/assets/Icon_Outline_bell.svg"
import Search from "@/shared/ui/assets/Icon_Outline_search.svg"
import { Link } from "@/shared/ui"

export function PageHeader() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo" />
      <Container container justifyBetween className={styles.buttonContainer}>
        <Link href="#" className={styles.linkDecoration}>
          Home
        </Link>
        <Link href="#" className={styles.linkDecoration}>
          Movie Release
        </Link>
        <Link href="#" className={styles.linkDecoration}>
          About
        </Link>
        <Link href="#" className={styles.linkDecoration}>
          Contact
        </Link>
      </Container>
      <Container container justifyBetween className={styles.iconContainer}>
        <Link href="#" className={styles.linkDecoration}>
          <Image src={Search} alt="button-search" />
        </Link>
        <Link href="#" className={styles.linkDecoration}>
          <Image src={Bell} alt="button-bell" />
        </Link>
      </Container>
    </header>
  )
}
