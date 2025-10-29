import { useParams } from "react-router-dom";
import { getSubjectData } from "../data/subjectsData";

const SubjectPrinciples = () => {
  const { subject } = useParams();
  const subjectData = getSubjectData(subject);

  if (!subjectData) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="principles-container">
      <h2>Principles: {subjectData.title}</h2>
      <div className="principles-list">
        {subjectData.principles.map((principle, index) => (
          <div key={index} className="principle-card">
            <h3>{principle.title}</h3>
            <p style={{ color: "#222" }}>{principle.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPrinciples;
