import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { formatTitle, pages } from "@/data/routes";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Pages not listed in routes.ts (course chapters, 404) set their own meta.
    const page = pages.find((p) => p.path === pathname);
    if (page) {
      document.title = formatTitle(page.title);
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", page.description);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
