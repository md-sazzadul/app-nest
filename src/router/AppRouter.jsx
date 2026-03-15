import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AppDetails from "../pages/AppDetails";
import Apps from "../pages/Apps";
import Home from "../pages/Home";
import Installation from "../pages/Installation";

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
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
