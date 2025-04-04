import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@pages/home";
import { ContactPage } from "@pages/contact";

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />,
      <Route path="/contact" element={<ContactPage />} />,
    </>,
  );

  const router = createHashRouter(routers, {});

  return <RouterProvider router={router} />;
};
