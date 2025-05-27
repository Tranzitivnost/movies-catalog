import { Container, Button, Text } from "@/shared/ui";
import { useState } from "react";
import styles from "./Slider.module.css";
import clsx from "clsx";

interface Props {
  children: JSX.Element[];
  className?: string;
}

export function Slider({ children, className }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const childrenCopy = children.slice(0, children.length);
  const visibleItems = childrenCopy.slice(startIndex);

  const goToNext = () => {
    if (childrenCopy.length - 1 === startIndex) {
      setStartIndex(0);
      return;
    }
    setStartIndex(startIndex + 1);
  };

  const goToPrev = () => {
    if (startIndex === 0) {
      setStartIndex(childrenCopy.length - 1);
      return;
    }
    setStartIndex(startIndex - 1);
  };

  if (children.length === 0) {
    return <Text>No items</Text>;
  }

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
        />
      </Container>
      <Container container gap="24px" className={styles.visibleItems}>
        {visibleItems}
      </Container>
      <Container alignCenter justifyCenter className={styles.buttonContainer}>
        <Button onClick={goToNext} className={styles.button} />
      </Container>
    </Container>
  );
}
