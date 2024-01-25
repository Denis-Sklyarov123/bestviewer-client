import React from "react";
import ReactDOM from "react-dom/client";
import LetsYouIn from "./pages/LetsYouIn/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateYourAccount from "./pages/CreateYourAccount/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LetsYouIn />,
  },
  { path: "createaccount", element: <CreateYourAccount /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
