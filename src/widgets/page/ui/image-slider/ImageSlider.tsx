import type { Movie } from "@/shared/api";
import { Container, Button } from "@/shared/ui";
import { useState } from "react";
import styles from "./ImageSlider.module.css";
import clsx from "clsx";
interface Props {
  children: (slide: Movie, index: number) => React.ReactNode;
  slides: Movie[];
  visibleCount?: number;
  className?: string;
}

export function ImageSlider({ slides, visibleCount = 3, children }: Props) {
  const [startIndex, setStartIndex] = useState(0);

  if (slides.length === 0) {
    return <p>Loading...</p>;
  }

  const maxIndex = slides.length - visibleCount;

  const next = () => {
    setStartIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleImages = slides.slice(startIndex, startIndex + visibleCount);

  return (
    <Container container alignCenter gap="12px" className={styles.container}>
      <Button
        onClick={prev}
        disabled={startIndex === 0}
        className={clsx([styles.button, styles.prevButton])}
      />
      <Container container gap="24px" className={styles.visibleImages}>
        {visibleImages.map((slide, index) => {
          return children(slide, index);
        })}
      </Container>
      <Button
        onClick={next}
        disabled={startIndex >= maxIndex}
        className={styles.button}
      />
    </Container>
  );
}
