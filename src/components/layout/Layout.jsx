import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import PageLoader from "./PageLoader";

const Layout = () => {
  return (
    <>
      <PageLoader />

      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
