import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@pages/home";
import { ContactPage } from "@pages/contact";
import { Routes } from "./routes";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path={Routes.HOME} element={<HomePage />} />,
      <Route path={Routes.CONTACT} element={<ContactPage />} />,
    </>,
  );

  const router = createHashRouter(routers, {});

  return <RouterProvider router={router} />;
};
