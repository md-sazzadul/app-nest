import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import AppDetails from "../pages/AppDetails";
import Apps from "../pages/Apps";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
