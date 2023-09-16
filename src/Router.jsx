import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "./components/LandingLayout";
import { Home } from "./pages/home";
import { Problem } from "./pages/problema";
import { Solution } from "./pages/solucao";
import { About } from "./pages/sobre";
import { Contact } from "./pages/contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/problema", element: <Problem /> },
      { path: "/solucao", element: <Solution /> },
      { path: "/sobre", element: <About /> },
      { path: "/contato", element: <Contact /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
