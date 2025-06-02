import styles from "./PageHeader.module.css";
import { Image, Container, Link, ThemeSwitcher } from "@/shared/ui";
import { LogoIcon } from "@/shared/ui";
import { SearchIcon } from "@/shared/ui";
import { Routes } from "@shared/routes";
import clsx from "clsx";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
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
      <Link to={Routes.HOME}>
        <Image src={LogoIcon} alt="logo" />
      </Link>
      <Container container justifyBetween className={styles.buttonContainer}>
        <Link to={Routes.HOME} className={styles.linkDecoration}>
          Home
        </Link>
        {/* TODO replace it to the movie release when we have this page */}
        <Link to={Routes.MOVIE_RELEASE} className={styles.linkDecoration}>
          Movie Release
        </Link>
        {/* TODO replace it to the about when we have this page */}
        <Link to={Routes.ABOUT} className={styles.linkDecoration}>
          About
        </Link>
        <Link to={Routes.CONTACT} className={styles.linkDecoration}>
          Contact
        </Link>
      </Container>
      <Container
        container
        justifyBetween
        alignCenter
        className={styles.iconContainer}
      >
        <Link to="#" className={styles.linkDecoration}>
          <Image src={SearchIcon} alt="button-search" />
        </Link>
        <ThemeSwitcher />
      </Container>
    </header>
  );
}
