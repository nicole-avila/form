import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/ErrorPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ProjectPage from "./Pages/ProjectPage";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About";

//Creating children root for PortfolioPage route to see the root layout again but with a 'blank page' on the right.

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <LandingPage />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: (
      <>
        <Navbar />
        <PortfolioPage />
      </>
    ),
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
