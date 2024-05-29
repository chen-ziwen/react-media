import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "discover",
        element: <div>Discover</div>,
      },
      {
        path: "introduce",
        element: <div>Introduce</div>,
      },
      {
        path: "messages",
        element: <div>Messages</div>,
      },
      {
        path: "address",
        element: <div>Address</div>,
      },
    ],
  },
]);

export default router;
