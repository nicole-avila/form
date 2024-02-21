import "./StylePage.scss";
import { NavLink, Outlet } from "react-router-dom";

/*
Importing the Outlet component from react router to act as a placeholder for any child route in the PortfolioPage component. 
This way, the child route is rendered through the Outlet component.

 Using NavLink to check the url and see if it's currently active, allowing us to apply 
 an active style for a better user experience. All active links will be highlighted.
*/

export default function PortfolioPage() {
  const projects = ["Form", "Book"];

  return (
    <div className="portfolio">
      <div className="portfolio__project">
        {projects.map((project) => (
          <div className="portfolio__navlink" key={project}>
            <NavLink
              style={{ textTransform: "uppercase" }}
              to={`/portfolio/${project}`}
              className={({ isActive }) => {
                return isActive ? "text-primary-700" : "";
              }}
            >
              {project}
            </NavLink>
          </div>
        ))}
      </div>
      {}
      <div className="portfolio__outlet">
        <Outlet />
      </div>
    </div>
  );
}
