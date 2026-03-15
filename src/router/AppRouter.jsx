import { BrowserRouter, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import Apps from "../pages/Apps";
import Home from "../pages/Home";
import Installation from "../pages/Installation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
