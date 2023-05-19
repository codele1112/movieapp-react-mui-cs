// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trending from "./pages/Trending/Trending.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import Series from "./pages/Series/Series.jsx";
import Search from "./pages/Search/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <RouterProvider router={router} />

  // </React.StrictMode>,
);
