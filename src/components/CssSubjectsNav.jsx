import { Link, useParams, useLocation } from "react-router-dom";

const CssSubjectsNav = () => {
  const navSubjects = [
    { slug: "shadowing", label: "Shadowing" },
    { slug: "animation", label: "Animation" },
    { slug: "3D-animation", label: "3D Animation" },
    { slug: "background", label: "Background" },
    { slug: "DOMcordination", label: "DOM Cordination" },
    { slug: "general", label: "General" },
    { slug: "box-model", label: "Box Model" },
    { slug: "flexbox", label: "Flexbox" },
    { slug: "grid", label: "Grid" },
    { slug: "positioning", label: "Positioning" },
    { slug: "typography", label: "Typography" },
    { slug: "colors", label: "Colors" },
    { slug: "animations", label: "Animations" },
    { slug: "transitions", label: "Transitions" },
    { slug: "responsive-design", label: "Responsive Design" },
  ];

  const { subject: paramSubject } = useParams();
  const location = useLocation();

  // Extract subject from URL pathname if not available as a route parameter
  // Paths like /css/shadowing, /css/animation, or /css/:subject/projects
  const getSubjectFromPath = () => {
    if (paramSubject) return paramSubject;

    const pathParts = location.pathname.split("/").filter(Boolean);
    // If path is /css/shadowing, pathParts = ['css', 'shadowing']
    // If path is /css/animation, pathParts = ['css', 'animation']
    // If path is /css/:subject/projects, pathParts = ['css', 'subject', 'projects']
    if (pathParts.length >= 2 && pathParts[0] === "css") {
      const subjectSlug = pathParts[1];
      // Check if it's a valid subject slug
      if (navSubjects.some((item) => item.slug === subjectSlug)) {
        return subjectSlug;
      }
    }
    return null;
  };

  const subject = getSubjectFromPath();

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        {navSubjects.map((item) => (
          <li key={item.slug}>
            <Link
              to={`/css/${item.slug}`}
              className={`nav-link ${subject === item.slug ? "active" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CssSubjectsNav;
