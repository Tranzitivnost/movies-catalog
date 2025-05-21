import type { Movie } from "@/shared/api";
import { Container, Text } from "@/shared/ui";
import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { Image } from "@/shared/ui";
import { MoviePreview } from "@/entities/movies";

type Props = {
  slides: Movie[];
  visibleCount?: number;
};

export function ImageSlider({ slides, visibleCount = 5 }: Props) {
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
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={prev} disabled={startIndex === 0}>
        ←
      </button>
      <div style={{ display: "flex", overflow: "hidden", gap: "24px" }}>
        {visibleImages.map((movie, index) => (
          <MoviePreview movie={movie} key={index}></MoviePreview>
        ))}
      </div>
      <button onClick={next} disabled={startIndex >= maxIndex}>
        →
      </button>
    </div>
  );
}
