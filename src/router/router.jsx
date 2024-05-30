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
        element: <div>首页</div>,
        children: [
          {
            path: "front",
            element: <div>前端</div>,
          },
          {
            path: "backend",
            element: <div>后端</div>,
          },
        ],
      },
      {
        path: "introduce",
        element: <div>自我介绍</div>,
      },
      {
        path: "messages",
        element: <div>详细信息</div>,
      },
      {
        path: "address",
        element: <div>项目地址</div>,
      },
    ],
  },
]);

export default router;
