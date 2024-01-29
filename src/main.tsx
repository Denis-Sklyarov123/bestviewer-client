import React from "react";
import ReactDOM from "react-dom/client";
import LetsYouIn from "./pages/LetsYouIn/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "./pages/Create/index.tsx";
import LoginAccount from "./pages/Login/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LetsYouIn />,
  },
  { path: "create", element: <CreateAccount /> },
  { path: "login", element: <LoginAccount /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
