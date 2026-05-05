import { useState } from "react";
import { Container } from "@shared/ui/components/Container";
import { Button } from "./Button";
import { Image } from "./Image";
import clsx from "clsx";
import styles from "./Pagination.module.scss";
import { ArrowIcon } from "..";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: Props) => {
  const PAGE_WINDOW = 5;

  const [startPage, setStartPage] = useState(1);

  const endPage = Math.min(startPage + PAGE_WINDOW - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const handlePrev = () => {
    if (startPage > 1) {
      setStartPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (endPage < totalPages) {
      setStartPage(prev => prev + 1);
    }
  };

  return (
    <Container
      container
      justifyBetween
      alignCenter
      gap="8px"
      className={clsx([className, styles.buttonContainer])}
    >
      <Button
        className={clsx([styles.button, styles.prevButton])}
        onClick={handlePrev}
        disabled={startPage === 1}
      >
        <Image
          src={ArrowIcon}
          alt="arrow-left"
          className={styles["img-arrow"]}
        />
      </Button>

      {pages.map(page => (
        <Button
          key={page}
          className={clsx([
            styles.button,
            {
              [styles.pageButtonActive]: page === currentPage,
            },
          ])}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        className={clsx([styles.button, styles.nextButton])}
        onClick={handleNext}
        disabled={endPage === totalPages}
      >
        <Image
          src={ArrowIcon}
          alt="arrow-right"
          className={styles["img-arrow"]}
        />
      </Button>
    </Container>
  );
};
