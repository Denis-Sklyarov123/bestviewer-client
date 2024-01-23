import React from "react";
import ReactDOM from "react-dom/client";
import LetsYouIn from "./pages/letsYouIn/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LetsYouIn />,
  },
  { path: "contacts/:contactId", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
