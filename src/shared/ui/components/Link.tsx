interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: React.ReactNode
  href: string
  target?: string
  className?: string
}

export const Link = ({ href, children, target, className, ...rest }: Props) => {
  return (
    <a href={href} className={className} {...rest} target={target}>
      {children}
    </a>
  )
}
