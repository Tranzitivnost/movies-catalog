import { useAppDispatch, useAppSelector } from "@shared/lib";
import { setPage } from "@entities/popular-movies";
import { Button, Container, Image, ArrowIcon, Layout, Text } from "@shared/ui";
import styles from "./Pagination.module.scss";
import clsx from "clsx";

interface Props {
  children: JSX.Element;
  className?: string;
}

export function Pagination({ children }: Props) {
  const dispatch = useAppDispatch();

  const { currentPage, totalPages } = useAppSelector(
    state => state.popularMovies,
  );

  return (
    <Container
      container
      alignCenter
      flexDirectionColumn
      className={styles.paginationContainer}
    >
      <Layout
        container
        alignCenter
        justifyCenter
        gap="16px"
        className={styles.buttonsContainer}
      >
        <Button
          disabled={currentPage === 1}
          onClick={() => dispatch(setPage(currentPage - 1))}
          className={clsx([styles.button, styles.prevButton])}
        >
          <Image
            src={ArrowIcon}
            alt="arrow-left"
            className={styles["img-arrow"]}
          />
        </Button>

        <Text className={styles.pageInfo}>
          Page {currentPage} ... {totalPages}
        </Text>

        <Button
          disabled={currentPage === totalPages}
          onClick={() => dispatch(setPage(currentPage + 1))}
          className={styles.button}
        >
          <Image
            src={ArrowIcon}
            alt="arrow-right"
            className={styles["img-arrow"]}
          />
        </Button>
      </Layout>
      {children}
    </Container>
  );
}
