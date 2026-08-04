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

const DOTS = ". . .";

type PaginationRangeItem = number | typeof DOTS;

const getPaginationRange = (
  currentPage: number,
  totalPages: number,
): PaginationRangeItem[] => {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, DOTS, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      DOTS,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    DOTS,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    DOTS,
    totalPages,
  ];
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: Props) => {
  const safeTotalPages = Math.min(totalPages, 500);

  const paginationRange = getPaginationRange(currentPage, safeTotalPages);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < safeTotalPages) {
      onPageChange(currentPage + 1);
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
        disabled={currentPage === 1}
      >
        <Image
          src={ArrowIcon}
          alt="arrow-left"
          className={styles["img-arrow"]}
        />
      </Button>

      {paginationRange.map((page, index) =>
        page === DOTS ? (
          <span key={`dots-${index}`} className={styles.dots}>
            {DOTS}
          </span>
        ) : (
          <Button
            key={page}
            className={clsx([
              styles.button,
              {
                [styles.pageButtonActive]: page === currentPage,
              },
            ])}
            onClick={() => {
              onPageChange(page);
            }}
          >
            {page}
          </Button>
        ),
      )}

      <Button
        className={clsx([styles.button, styles.nextButton])}
        onClick={handleNext}
        disabled={currentPage === safeTotalPages}
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
