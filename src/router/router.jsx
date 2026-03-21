import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import AppDetails from "../pages/AppDetails";
import Apps from "../pages/Apps";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";

const appsLoader = async () => {
  const res = await fetch("/apps.json");
  return res.json();
};

const appDetailsLoader = async ({ params }) => {
  const res = await fetch("/apps.json");
  const data = await res.json();
  return data.find((a) => a.id === Number(params.id));
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
        loader: appsLoader,
      },
      {
        path: "apps",
        Component: Apps,
        loader: appsLoader,
      },
      {
        path: "apps/:id",
        Component: AppDetails,
        loader: appDetailsLoader,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
