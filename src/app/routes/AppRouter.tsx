import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@pages/home";
import { ContactPage } from "@pages/contact";
import { Routes } from "@shared/routes";
import { FilmPage } from "@/pages/film/ui/FilmPage";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path={Routes.HOME} element={<HomePage />} />,
      <Route path={Routes.CONTACT} element={<ContactPage />} />,
      <Route path={Routes.FILM_TEMPLATE} element={<FilmPage />} />,
    </>,
  );

  const router = createHashRouter(routers, {});

  return <RouterProvider router={router} />;
};
