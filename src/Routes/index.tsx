import { createBrowserRouter } from "react-router-dom";
import * as P from "../Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <P.HomePage />,
  },
]);
