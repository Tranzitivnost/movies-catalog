import { useAppDispatch, useAppSelector } from "@shared/lib";
import { setPage } from "@entities/popular-movies";
import { Button, Container } from "@shared/ui";

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
      >
        Prev
      </Button>

      <span>
        Page {currentPage} / {totalPages}
      </span>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setPage(currentPage + 1))}
      >
        Next
      </Button>
    </Container>
  );
}
