import styles from "./Container.module.css"
import clsx from "clsx"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode
  justifyStart?: boolean
  justifyCenter?: boolean
  justifyEnd?: boolean
  alignStart?: boolean
  alignCenter?: boolean
  alignEnd?: boolean
  flexDirectionColumn?: boolean
  justifyContentCenter?: boolean
  justifyBetween?: boolean
  flexWrap?: boolean
  className?: string
  gap?: string
}

export const Container = ({
  className,
  children,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  flexDirectionColumn,
  justifyContentCenter,
  justifyBetween,
  flexWrap,
  gap,
  ...rest
}: Props) => {
  const style = { gap: gap ?? "0", ...rest.style } as React.CSSProperties
  return (
    <div
      {...rest}
      style={style}
      className={clsx([
        styles.container,
        className,
        {
          [styles.justifyStart]: justifyStart,
          [styles.justifyCenter]: justifyCenter,
          [styles.justifyEnd]: justifyEnd,
          [styles.alignStart]: alignStart,
          [styles.alignCenter]: alignCenter,
          [styles.alignEnd]: alignEnd,
          [styles.flexDirectionColumn]: flexDirectionColumn,
          [styles.justifyContentCenter]: justifyContentCenter,
          [styles.justifyBetween]: justifyBetween,
          [styles.flexWrap]: flexWrap,
        },
      ])}
    >
      {children}
    </div>
  )
}
