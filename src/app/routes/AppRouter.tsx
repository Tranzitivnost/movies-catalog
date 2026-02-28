import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@pages/home";
import { ContactPage } from "@pages/contact";
import { Routes } from "@shared/routes";
import { FilmPage } from "@/pages/film";
import { NotFound } from "@/pages/error";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path={Routes.HOME} element={<HomePage />} />,
      <Route path={Routes.CONTACT} element={<ContactPage />} />,
      <Route path={Routes.FILM} element={<FilmPage />} />,
      <Route path="*" element={<NotFound />} />
    </>,
  );

  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
