import styles from "./PageHeader.module.css";
import { Image } from "@/shared/ui";
import Logo from "@/shared/ui/assets/Component-logo.svg";
import { Container } from "@/shared/ui";
import Search from "@/shared/ui/assets/Icon_Outline_search.svg";
import { Link } from "@/shared/ui";
import { ThemeSwitcher } from "@/shared/ui";
import clsx from "clsx";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  positionAbsolute?: boolean;
}

export function PageHeader({ positionAbsolute }: Props) {
  return (
    <header
      className={clsx([
        styles.header,
        { [styles.positionAbsolute]: positionAbsolute },
      ])}
    >
      <Image src={Logo} alt="logo" />
      <Container container justifyBetween className={styles.buttonContainer}>
        <Link href="/" className={styles.linkDecoration}>
          Home
        </Link>
        <Link href="#" className={styles.linkDecoration}>
          Movie Release
        </Link>
        <Link href="#" className={styles.linkDecoration}>
          About
        </Link>
        <Link href="/#/contact" className={styles.linkDecoration}>
          Contact
        </Link>
      </Container>
      <Container
        container
        justifyBetween
        alignCenter
        className={styles.iconContainer}
      >
        <Link href="#" className={styles.linkDecoration}>
          <Image src={Search} alt="button-search" />
        </Link>
        <ThemeSwitcher />
      </Container>
    </header>
  );
}
