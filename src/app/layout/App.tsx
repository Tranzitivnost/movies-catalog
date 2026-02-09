import "@shared/ui/styles/reset-styles.scss";

import "@shared/ui/styles/typography/typography-variables.scss";
import "@shared/ui/styles/theme/theme-variables.scss";
import "@shared/ui/styles/layout-grid/layout-grid-variables.scss";

import "@shared/ui/styles/theme/theme-apply.scss";
import "@shared/ui/styles/typography/typography-apply.scss";
import "@shared/ui/styles/layout-grid/layout-grid-apply.scss";

import { Providers } from "../providers";
import { AppRouter } from "../routes";
import { Container, useTheme } from "@/shared/ui";
import { useEffect } from "react";
import styles from "./App.module.scss";

export const App = () => {
  const { restoreTheme } = useTheme();

  useEffect(() => {
    restoreTheme();
  }, []);

  return (
    <Container
      className={styles.container}
      justifyCenter
      alignCenter
      flexDirectionColumn
    >
      <Providers>
        <AppRouter />
      </Providers>
    </Container>
  );
};
