import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import App from "./App";
import Auth from "./pages/Auth";
import Users from "./pages/Users";
import Practice from "./pages/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      { index: true, element: <Home /> },   
      
      { path: "auth", element: <Auth />},
      { path: "user/:id", element: <Users />},
      { path: "practice/:difficulty", element: <Practice />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
