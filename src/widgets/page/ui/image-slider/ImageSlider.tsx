import { Container, Button } from "@/shared/ui";
import { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";
import clsx from "clsx";

interface Props {
  children: JSX.Element[];
  visibleCount?: number;
  className?: string;
}

// 1. work with indexes of array. add somehow to the end of visible items
// new items from beginning of source array

// edge cases:
// 1. when we at the end or start of array we need to somehow copy the rest of array so it is cycled (startIndex)
// 2. length of slides array and visibleCount can be different values (but should not) (visible count cannot be > slides.length)
// 3. visibleCount <= 0
// 4. slides.length === 0

// slides, visibleCount, startIndex
// slides - [div, span, div, ReactElement], visibleCount - number, startIndex - number

// <ImageSlider visibleCount={2}>
//    <Moive id="1"/>
//    <Moive id="2"/>
//    <Moive id="3"/>
// </ImageSlider>

// дублируем массив children
// когда startIndex + visibleCount === children.length  то к массиву  добавляем  слайс,
// где (нулевой индекс, 0 + visibleCount), а потом убираем

//next = (setStartIndex(value + 1))
export function ImageSlider({ visibleCount = 5, children }: Props) {
  const [slides, setSlides] = useState(children);

  useEffect(() => {
    setSlides(children);
  }, [children]);

  const nextImageGenerate = () => {
    setSlides(prevSlides => {
      const firstElement = prevSlides[0];
      const newSlides = [...prevSlides.slice(1), firstElement];
      return newSlides;
    });
  };

  const prevImageGenerate = () => {
    setSlides(prevSlides => {
      const lastElement = prevSlides[prevSlides.length - 1];
      const newSlides = [lastElement, ...prevSlides.slice(0, -1)];
      return newSlides;
    });
  };

  const visibleImages = slides.slice(0, visibleCount);

  if (children.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <Container container alignCenter gap="12px" className={styles.container}>
      <Button
        onClick={prevImageGenerate}
        className={clsx([styles.button, styles.prevButton])}
      />
      <Container container gap="24px" className={styles.visibleImages}>
        {visibleImages}
      </Container>
      <Button onClick={nextImageGenerate} className={styles.button} />
    </Container>
  );
}
