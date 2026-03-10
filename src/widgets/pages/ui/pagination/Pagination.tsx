import { useAppDispatch, useAppSelector } from "@shared/lib";
import { setPage } from "@entities/popular-movies";
import { Button, Container, Image, ArrowIcon } from "@shared/ui";
import styles from "./Pagination.module.scss";
import clsx from "clsx";

export function Pagination({ className }: { className?: string }) {
  const dispatch = useAppDispatch();

  const { currentPage, totalPages } = useAppSelector(
    state => state.popularMovies,
  );

  return (
    <Container className={className}>
      <Button
        disabled={currentPage === 1}
        onClick={() => dispatch(setPage(currentPage - 1))}
        className={styles.button}
      >
        <Image src={ArrowIcon} alt="arrow-left" />
      </Button>

      <span>
        Page {currentPage} ... {totalPages}
      </span>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setPage(currentPage + 1))}
        className={clsx([styles.button, styles.nextButton])}
      >
        <Image src={ArrowIcon} alt="arrow-left" />
      </Button>
    </Container>
  );
}
