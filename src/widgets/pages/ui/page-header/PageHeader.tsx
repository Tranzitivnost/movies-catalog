import styles from "./PageHeader.module.scss";
import { Image, Container, Link, ThemeSwitcher } from "@/shared/ui";
import { LogoIcon, BurgerMenuIcon } from "@/shared/ui";
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
      <Link to={Routes.HOME} className={styles.logoLink}>
        <Image src={LogoIcon} alt="logo" />
      </Link>
      <Container
        container
        justifyBetween
        alignCenter
        className={styles.buttonContainer}
      >
        <Link
          to={Routes.HOME}
          className={clsx(styles.linkDecoration, styles.home)}
        >
          Home
        </Link>
        {/* TODO replace it to the movie release when we have this page */}
        <Link
          to={Routes.MOVIE_RELEASE}
          className={clsx(styles.linkDecoration, styles.movieRelease)}
        >
          Movie Release
        </Link>
        {/* TODO replace it to the about when we have this page */}
        <Link
          to={Routes.ABOUT}
          className={clsx(styles.linkDecoration, styles.about)}
        >
          About
        </Link>
        <Link
          to={Routes.CONTACT}
          className={clsx(styles.linkDecoration, styles.contact)}
        >
          Contact
        </Link>
      </Container>
      <Container
        container
        alignCenter
        justifyAround
        className={styles.iconContainer}
      >
        <Link
          to="#"
          className={clsx(styles.linkDecoration, styles.searchDecoration)}
        >
          <Image src={SearchIcon} alt="button-search" />
        </Link>
        <Link
          to="#"
          className={clsx(styles.linkDecoration, styles.burgerMenuDecoration)}
        >
          <Image src={BurgerMenuIcon} alt="burger-menu" />
        </Link>
        <ThemeSwitcher className={styles.themeSwitcher} />
      </Container>
    </header>
  );
}
