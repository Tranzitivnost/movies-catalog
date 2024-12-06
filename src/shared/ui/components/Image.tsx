import styles from "./Image.module.css"
import clsx from "clsx"


interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string
  alt?: string
  className?: string
}

export const Image: React.FunctionComponent<Props> = ({
  src,
  alt,
  className,
  ...rest
}) => {
  return <img className={className} {...rest} src={src} alt={alt} />
}