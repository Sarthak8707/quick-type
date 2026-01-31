import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import App from "./App";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      { index: true, element: <Home /> },   
      { path: "about", element: <About /> },
      { path: "auth", element: <Auth />} 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
