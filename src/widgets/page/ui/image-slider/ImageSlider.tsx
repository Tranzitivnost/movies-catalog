import type { Movie } from "@/shared/api";
import { Container, Button } from "@/shared/ui";
import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { Image } from "@/shared/ui";
import { MoviePreview } from "@/entities/movies";

interface Props extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
  slides: Movie[];
  visibleCount?: number;
};

export function ImageSlider({ slides, visibleCount = 5, children }: Props) {
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
    <Container style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Button onClick={prev} disabled={startIndex === 0}>
        ←
      </Button>
      <Container style={{ display: "flex", overflow: "hidden", gap: "24px" }}>
        {visibleImages.map((image, index) => (
          {children }
        ))}
      </Container>
      <Button onClick={next} disabled={startIndex >= maxIndex}>
        →
      </Button>
    </Container>
  );
}
