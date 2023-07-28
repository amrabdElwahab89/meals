import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import LayOut from "./component/layout/LayOut";
import MealsDetails from "./component/MealsDetails/MealsDetails";
import Search from "./component/search/Search";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/mealsDetails/:id", element: <MealsDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
