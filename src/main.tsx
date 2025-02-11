import React from "react";
import ReactDOM from "react-dom/client";
import LetsYouIn from "./pages/LetsYouIn/index.tsx";
import GetStarted from "./pages/GetStarted/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "./pages/Create/index.tsx";
import LoginAccount from "./pages/Login/index.tsx";
import ChooseInterest from "./pages/ChooseInterest/index.tsx";

// import { Body } from "./styled.ts";
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.StrictMode>
      {/* <Body> */}
      <RouterProvider router={router} />
      {/* </Body> */}
    </React.StrictMode>
  </React.StrictMode>
);
