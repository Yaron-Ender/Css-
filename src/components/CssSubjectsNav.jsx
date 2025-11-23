import { Link, useParams } from "react-router-dom";

const CssSubjectsNav = () => {
  const navSubjects = [
    { slug: "shadowing", label: "Shadowing" },
    { slug: "animation", label: "Animation" },
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

  const { subject } = useParams();
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
