import { useState } from "react";
import { DOMcordinationData } from "../../data/DOMcordination";
import SubjectPrinciples from "../../pages/SubjectPrinciples";
import ProjectList from "../../pages/ProjectList";

const DOMcordination = () => {
  const { DOMcordination } = DOMcordinationData ;
  const arrayOfPrinciples = DOMcordination.principles;
  const arrOfProjects = DOMcordination.projects;
  const [activeTab, setActiveTab] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Callback function to handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Function to go back to project list
  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
<div>
<h1>DOM Cordination </h1>
<div className="tab-nav">
  <button
    className={`tab ${activeTab === "principles" ? "active" : ""}`}
    onClick={() => {
      setActiveTab("principles");
      setSelectedProject(null); // Reset when switching tabs
    }}> Principle
  </button>
  <button
    className={`tab ${activeTab === "projects" ? "active" : ""}`}
    onClick={() => {
      setActiveTab("projects");
      setSelectedProject(null); // Reset when switching tabs
    }}> Projects
  </button>
  {selectedProject&&(<button className="tab" onClick={handleBackToProjects}>← Back to Projects</button>)}
</div>
{activeTab === "principles" && (
  <SubjectPrinciples
    arrayOfPrinciples={arrayOfPrinciples}
    subjectTitle="DOM cordination"
  />
)}
{activeTab === "projects" && !selectedProject && (
  <ProjectList
    arrOfProjects={arrOfProjects}
    subjectTitle="DOM cordination"
    onProjectClick={handleProjectClick}
  />
)}
{activeTab === "projects" && selectedProject && (
  <div>
    {selectedProject.component && (
      <div className="project-content">
        {(() => {
          const ProjectComponent = selectedProject.component;
          return <ProjectComponent
          title={selectedProject.title}
          description = {selectedProject.description}
          />;
        })()}
      </div>
    )}
  </div>
)}
</div>
  );
}

export default DOMcordination