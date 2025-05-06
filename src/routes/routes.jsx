import AppLayout from "../layouts/AppLayout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import OurRooms from "../pages/OurRooms";
import OurServices from "../pages/OurServices";
import OurTeam from "../pages/OurTeam";
import Price from "../pages/Price";
import ServiceDetails from "../pages/ServiceDetails";

export const appRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ourrooms",
        element: <OurRooms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "team",
        element: <OurTeam />,
      },
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "services",
        element: <OurServices />,
      },
      {
        path: "servicesDetails",
        element: <ServiceDetails />,
      },
    ],
  },
];
