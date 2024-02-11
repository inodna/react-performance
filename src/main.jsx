import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Index from "./routes/index";
import Memo from "./routes/memo";
import UseMemo from "./routes/use-memo";
import UseCallback from "./routes/use-callback";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "memo",
        element: <Memo />,
      },
      {
        path: "use-memo",
        element: <UseMemo />,
      },
      {
        path: "use-callback",
        element: <UseCallback />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
