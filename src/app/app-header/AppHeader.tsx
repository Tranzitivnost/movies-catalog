import styles from "./AppHeader.module.css"
import { Image } from "@/shared/ui/components/Image"
import Logo from "@/shared/ui/assets/Component-logo.svg"
import { Container } from "@/shared/ui"
import Bell from "@/shared/ui/assets/Icon_Outline_bell.svg"
import Search from "@/shared/ui/assets/Icon_Outline_search.svg"
export function AppHeader() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo"></Image>
      <Container>Home Movie Release About</Container>
      <Container>
        <Image src={Search} alt="button-search"></Image>
        <Image src={Bell} alt="button-bell"></Image>
      </Container>
    </header>
  )
}
