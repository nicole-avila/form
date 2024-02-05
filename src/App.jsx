import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/ErrorPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ProjectPage from "./Pages/ProjectPage";

//Creating children root for PortfolioPage route to see the root layout again but with a 'blank page' on the right.

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
    children: [
      {
        path: "/portfolio/:projectId",
        element: <ProjectPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
