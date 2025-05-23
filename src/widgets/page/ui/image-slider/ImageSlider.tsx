import type { Movie } from "@/shared/api";
import { Container, Button } from "@/shared/ui";
import { useState } from "react";
import styles from "./ImageSlider.module.css";
import clsx from "clsx";
import { current } from "@reduxjs/toolkit";
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
  const nextImageGenerate = () => {
    const isLastSlide = startIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : startIndex + 1;
    setStartIndex(newIndex);
  };

  const prevImageGenerate = () => {
    const isFirstSlide = startIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : startIndex - 1;

    setStartIndex(newIndex);
  };

  const visibleImages = slides.slice(startIndex, startIndex + visibleCount);

  return (
    <Container container alignCenter gap="12px" className={styles.container}>
      <Button
        onClick={prevImageGenerate}
        className={clsx([styles.button, styles.prevButton])}
      />
      <Container container gap="24px" className={styles.visibleImages}>
        {visibleImages.map((slide, index) => {
          return children(slide, index);
        })}
      </Container>
      <Button onClick={nextImageGenerate} className={styles.button} />
    </Container>
  );
}
