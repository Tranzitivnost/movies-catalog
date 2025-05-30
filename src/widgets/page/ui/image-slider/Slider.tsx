import { Container, Button, Image } from "@/shared/ui";
import { useState } from "react";
import styles from "./Slider.module.css";
import clsx from "clsx";
import Arrow from "@/shared/ui/assets/Arrow.png";

interface Props {
  children: JSX.Element[];
  className?: string;
}

export function Slider({ children, className }: Props) {
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
      gap="12px"
      className={clsx([styles.container, className])}
    >
      <Container alignCenter justifyCenter className={styles.buttonContainer}>
        <Button
          onClick={goToPrev}
          className={clsx([styles.button, styles.prevButton])}
        >
          <Image src={Arrow} alt="arrow-left" className={styles["img-arrow"]} />
        </Button>
      </Container>
      <Container container gap="24px" className={styles.visibleItems}>
        {visibleItems}
      </Container>
      <Container alignCenter justifyCenter className={styles.buttonContainer}>
        <Button onClick={goToNext} className={styles.button}>
          <Image
            src={Arrow}
            alt="arrow-right"
            className={styles["img-arrow"]}
          />
        </Button>
      </Container>
    </Container>
  );
}
