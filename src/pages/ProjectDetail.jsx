import { useParams } from "react-router-dom";
import { getSubjectData } from "../data/subjectsData";


const ProjectDetail = () => {
  const { subject, projectSlug } = useParams();
  const subjectData = getSubjectData(subject);

  if (!subjectData) {
    return <div>Subject not found</div>;
  }

  const project = subjectData.projects.find((p) => p.slug === projectSlug);
  if (!project) {
    return <div>Project not found</div>;
  }
  const ProjComp = project.component
  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-content">
        {/* Here you would load the actual project component */}
        <p>Project component for <b>{project.slug}</b> would load here</p>
        {/* Render a component reference stored on the project */}
        {project.component && (
          (() => {
            const ProjectComponent = project.component;
            return <ProjectComponent />;
          })()
        )}

        {/* <{project.slug && <project.slug />} /> */}
        {/* Example: 
          {project.component && <project.component />}
        */}
      </div>
    </div>
  );
};

export default ProjectDetail;
