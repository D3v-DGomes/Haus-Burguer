import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const rota = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
