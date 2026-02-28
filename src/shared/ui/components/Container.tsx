import styles from "./Container.module.scss";
import clsx from "clsx";

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  container?: boolean;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  flexDirectionColumn?: boolean;
  justifyBetween?: boolean;
  flexWrap?: boolean;
  justifyAround?: boolean;
  className?: string;
  gap?: string;
  flexShrink?: string;
}

export const Container = ({
  className,
  children,
  container,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  flexDirectionColumn,
  justifyBetween,
  flexWrap,
  justifyAround,
  gap,
  flexShrink,
  ...rest
}: ContainerProps) => {
  const style = {
    gap: gap ?? "0",
    flexShrink: flexShrink ?? "",
    ...rest.style,
  } as React.CSSProperties;
  return (
    <div
      {...rest}
      style={style}
      className={clsx([
        styles.container,
        className,
        {
          [styles.container]: container,
          [styles.justifyStart]: justifyStart,
          [styles.justifyCenter]: justifyCenter,
          [styles.justifyEnd]: justifyEnd,
          [styles.alignStart]: alignStart,
          [styles.alignCenter]: alignCenter,
          [styles.alignEnd]: alignEnd,
          [styles.flexDirectionColumn]: flexDirectionColumn,
          [styles.justifyBetween]: justifyBetween,
          [styles.flexWrap]: flexWrap,
          [styles.justifyAround]: justifyAround,
        },
      ])}
    >
      {children}
    </div>
  );
};
