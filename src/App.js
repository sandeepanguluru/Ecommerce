import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Todo from "./components/Todo";
import SwiggyData from "./components/SwiggyData";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import SwiggyItem from "./components/SwiggyItem";
import SwiggyInfo from "./components/SwiggyInfo";
import ProductInfo from "./components/ProductInfo";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <SwiggyData/> */}
      {/* <Body/> */}
      {/* <Todo/> */}
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/productInfo/:productId",
        element: <ProductInfo />,
      },
    ],
  },
]);
const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
