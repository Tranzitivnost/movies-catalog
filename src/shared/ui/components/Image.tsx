export const Image: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ src, alt, className, ...rest }) => {
  return <img className={className} {...rest} src={src} alt={alt} />
}
