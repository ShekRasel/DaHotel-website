import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function AppLayout() {
  const { pathname, hash, key } = useLocation();
  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => { window.history.scrollRestoration = previous; };
  }, [pathname, hash, key]);
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main" key={pathname}><Outlet /></main><Footer /></>;
}
export default AppLayout;
