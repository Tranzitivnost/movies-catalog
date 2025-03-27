import { Container } from "@shared/ui";
import { PageFooter, PageHeader } from "@/widgets/page";
import styles from "./ContactPage.module.css";
import { usePopularMovies } from "@entities/popular-movies";
import { ContactInformation } from "@/widgets/information";

import { Divider } from "@shared/ui";

export function ContactPage() {
  const { popularMovies } = usePopularMovies({
    page: 1,
    sort_by: "vote_count.desc",
    primary_release_year: 2025,
  });
  const firstMovie = popularMovies?.[0];

  return (
    <Container
      container
      flexDirectionColumn
      justifyBetween
      alignCenter
      className={styles.container}
    >
      <PageHeader />
      <ContactInformation />
      <Divider />
    </Container>
  );
}
