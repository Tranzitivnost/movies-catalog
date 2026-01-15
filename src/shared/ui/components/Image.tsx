type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export const Image: React.FC<ImageProps> = ({
  src,
  fallback,
  alt,
  className,
  ...rest
}) => {
  const handleError: React.ReactEventHandler<HTMLImageElement> = e => {
    if (fallback) {
      e.currentTarget.src = fallback;
      e.currentTarget.onerror = null;
    }
  };

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={handleError}
      {...rest}
    />
  );
};
