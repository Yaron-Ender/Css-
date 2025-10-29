import { Link, useParams } from "react-router-dom";
import { getSubjectData } from "../data/subjectsData";

const ProjectList = () => {
  const { subject } = useParams();
  const subjectData = getSubjectData(subject);

  if (!subjectData) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="projects-list">
      <h2>Projects: {subjectData.title}</h2>
      <div className="projects-grid">
        {subjectData.projects.map((project) => (
          <Link
            key={project.slug}
            to={`/subjects/${subject}/projects/${project.slug}`}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
