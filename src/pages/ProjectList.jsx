import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubjectData } from "../data/subjectsData";
//THIS COMP IS CREAT THE PROJ GRID "DROP,COFFIE,ETC"
const ProjectList = ({ arrOfProjects, subjectTitle, onProjectClick }) => {
  const hasProjects = arrOfProjects && arrOfProjects.length > 0;
  const { subject } = useParams();
  const subjectData = getSubjectData(subject);
  const [generalProject, setGeneralProject] = useState(false);
  useEffect(() => {
    if (subject === "general") setGeneralProject(true);
  }, [subject]);
  // if (!subjectData) {
  //   return <div>Subject not found</div>;
  // }

  return (
<div className="projects-list">
{/*for general projects */}
{generalProject && subjectData && (
<>
<h2 >Projects: {subjectTitle}</h2>
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
</>
)}
{/*for all other projects */}
{hasProjects && (
<ul className="projects-grid">
{arrOfProjects.map((project) => (
<li
key={project.slug}
className="project-card"
onClick={() => {
onProjectClick && onProjectClick(project);
}}
style={{
cursor: onProjectClick ? "pointer" : "default",
background: project.img
? `url(${project.img})`
: "",
backgroundPosition:'center',
backgroundSize: project.backgroudSize?project.backgroudSize:'100%',
backgroundRepeat:'no-repeat',
}}
>
<div style={{color:project.textColor?project.textColor:'#007bff'}} className="project-card-content">
<h3 >{project.title}</h3>
<h4>{project.description}</h4>
</div>
</li>
))}
</ul>
)}
</div>
  );
};

export default ProjectList;
