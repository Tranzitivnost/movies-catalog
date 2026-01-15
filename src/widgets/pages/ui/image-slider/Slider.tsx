import { Container, Button, Image, ArrowIcon } from "@/shared/ui";
import { useState } from "react";
import styles from "./Slider.module.css";
import clsx from "clsx";

interface Props {
  children: JSX.Element[];
  className?: string;
  gap?: string;
}

export function Slider({ children, className, gap }: Props) {
  const style = { gap: gap ?? "0" } as React.CSSProperties;
  const [startIndex, setStartIndex] = useState(0);

  const goToNext = () => {
    setStartIndex(prev => (prev + 1) % children.length);
  };

  const goToPrev = () => {
    setStartIndex(prev => (prev - 1 + children.length) % children.length);
  };

  const visibleItems = children.map((_, i) => {
    const index = (startIndex + i) % children.length;
    return children[index];
  });

  return (
    <Container
      container
      alignCenter
      className={clsx([styles.container, className])}
    >
      <Container alignCenter justifyEnd className={styles.buttonContainer}>
        <Button
          onClick={goToPrev}
          className={clsx([styles.button, styles.prevButton])}
        >
          <Image
            src={ArrowIcon}
            alt="arrow-left"
            className={styles["img-arrow"]}
          />
        </Button>
      </Container>

      <Container container style={style} className={styles.visibleItems}>
        <Container className={styles.gradient} />
        {visibleItems}
      </Container>
      <Container alignCenter justifyStart className={styles.buttonContainer}>
        <Button onClick={goToNext} className={styles.button}>
          <Image
            src={ArrowIcon}
            alt="arrow-right"
            className={styles["img-arrow"]}
          />
        </Button>
      </Container>
    </Container>
  );
}
