import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AppDetails from "../pages/AppDetails";
import Apps from "../pages/Apps";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/installation" element={<Installation />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
