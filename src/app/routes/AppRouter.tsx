import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@pages/home";
import { FilmPage } from "@pages/film";
import { Routes } from "@shared/routes";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path={Routes.HOME} element={<HomePage />} />,
      <Route path={Routes.FILM} element={<FilmPage />} />,
    </>,
  );

  const router = createHashRouter(routers, {});

  return <RouterProvider router={router} />;
};
