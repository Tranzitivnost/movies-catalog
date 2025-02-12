import styles from "./Text.module.css"
import clsx from "clsx"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  className?: string
}

export const Text = ({ children, className, ...rest }: Props) => {
  return (
    <div className={clsx([styles.text, className])} {...rest}>
      {children}
    </div>
  )
}
