import { Outlet } from "react-router-dom";
import SubjectsNav from "../components/SubjectsNav";
import TabNav from "../components/TabNav";
import { useParams } from "react-router-dom";
//for general projects
import { getSubjectData } from "../data/subjectsData";
import "../styles/tabNav.css";

const CssSubjects = () => {
  const { subject } = useParams();
  //for general projects
  const subjectData = getSubjectData(subject);
  // if (!subjectData) {
  //   return <div>Subject not found</div>;
  // }
  return (
    <div className="subjects-container">
      <SubjectsNav />
      <div className="subjects-page">
        {!subject && (
          <div className="subject-content">
            <Outlet />
          </div>
        )}
        {subject && (
          <div className="subject-content">
            <TabNav subjectSlug={subject} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CssSubjects;
