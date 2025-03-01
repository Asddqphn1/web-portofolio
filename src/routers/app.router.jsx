import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
