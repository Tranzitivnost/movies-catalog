import { Container, type ContainerProps } from "./Container";
import styles from "./Layout.module.scss";
import clsx from "clsx";

interface Props
  extends ContainerProps {
  variant?: 'main' | 'inner';
}

export const Layout = ({
  children,
  variant = 'main',
  className,
  ...rest
}: Props) => {
  return (
    <Container
      {...rest}
      className={clsx([
        styles.layout,
        {
          [styles.main]: variant === 'main',
          [styles.inner]: variant === 'inner',
        },
        className,
      ])}
    >
      {children}
    </Container>
  );
};
