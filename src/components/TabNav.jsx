import { Link, useLocation } from "react-router-dom";

const TabNav = ({ subjectSlug }) => {
  const location = useLocation();
  console.log(location);
  const isPrinciplesActive =
    location.pathname.endsWith("/principles") ||
    location.pathname === `/subjects/${subjectSlug}`;
  const isProjectsActive = location.pathname.includes("/projects");
  return (
    <nav className="tab-nav">
      <div className="tab-list">
        <Link
          to={`/subjects/${subjectSlug}/principles`}
          className={`tab ${isPrinciplesActive ? "active" : ""}`}
        >
          Principles
        </Link>
        <Link
          to={`/subjects/${subjectSlug}/projects`}
          className={`tab ${isProjectsActive ? "active" : ""}`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default TabNav;
