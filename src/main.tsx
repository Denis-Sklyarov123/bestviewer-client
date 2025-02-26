import React from "react";
import ReactDOM from "react-dom/client";
import LetsYouIn from "./pages/LetsYouIn/index.tsx";
import GetStarted from "./pages/GetStarted/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "./pages/Create/index.tsx";
import LoginAccount from "./pages/Login/index.tsx";
import ChooseInterest from "./pages/ChooseInterest/index.tsx";
import FillYourProfile from "./pages/FillYourProfile/index.tsx";

import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted />,
  },
  { path: "letsYouIn", element: <LetsYouIn /> },
  { path: "create", element: <CreateAccount /> },
  { path: "login", element: <LoginAccount /> },
  { path: "interest", element: <ChooseInterest /> },
  { path: "fillProfile", element: <FillYourProfile /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
