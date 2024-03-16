import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import BasketPage from "../pages/Basket/BaketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "basket",
        element: <BasketPage />,
      },
    ],
  },
]);
