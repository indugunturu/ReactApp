import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Restaurantmenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Grocary from "./components/Grocary";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Title = () => <h1>React App</h1>;
const number = 10000;
// react functional componet
const HeadingComponet = () => (
  <div id="container">
    <Title />
    {number}
    <h1>My heading</h1>
  </div>
);

const heading = React.createElement("h1", {}, "This is react");
const root = ReactDOM.createRoot(document.getElementById("root"));
// const Grocery = lazy(() => import("./components/Grocery"));
// const About = lazy(()=> import("./components/About"));

// header

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurantmenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/grocary",
      //   element: <Suspense fallback={<h1>Loading....</h1>}>
      //   <Grocery />
      // </Suspense>,
      element: <Grocary/>
      }
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
