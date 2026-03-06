import { Container, Button } from "@/shared/ui";
import { useState } from "react";
import { usePopularMovies } from "@entities/popular-movies";

interface Props {
  children: JSX.Element;
  className?: string;
}

export function Pagination({ children, className }: Props) {
  const [page, setPage] = useState(1);

  //   const { movies, loading } = usePopularMovies(page);
  return (
    <Container className={className}>
      {children}
      <Button onClick={() => setPage(page - 1)}>Prev</Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </Container>
  );
}
