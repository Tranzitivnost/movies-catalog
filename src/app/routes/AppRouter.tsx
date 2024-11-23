import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { HomePage } from "@pages/home"

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route path="/" element={<HomePage />} />,
  )

  const router = createHashRouter(routers, {})

  return <RouterProvider router={router} />
}
