import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/ErrorPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ProjectPage from "./Pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/:projectId",
    element: <ProjectPage />,
    errorElement: <ErrorPage />,
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
