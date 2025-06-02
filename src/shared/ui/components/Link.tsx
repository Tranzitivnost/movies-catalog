import { Link as RouterLink } from "react-router-dom";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
  href?: string;
  to?: string;
  target?: string;
  className?: string;
}

export const Link = ({
  href,
  to,
  children,
  target,
  className,
  onClick,
  ...rest
}: Props) => {
  if (to) {
    return (
      <RouterLink to={to} className={className} onClick={onClick}>
        {children}
      </RouterLink>
    );
  }
  return (
    <a href={href} className={className} {...rest} target={target}>
      {children}
    </a>
  );
};
