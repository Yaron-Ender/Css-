import {useParams} from 'react-router-dom';
import TabNav from '../../components/TabNav';
import {getSubjectData} from '../../data/subjectsData';
import {getAllSubjectSlugs} from '../../data/subjectsData';
import '../../styles/tabNav.css';

const GeneralSubjects = () => {
const {subject} = useParams()
const subjectData = getSubjectData(subject);
if (!subjectData) {
    return <h1>Subject not found</h1>;
}
  return (
<div className="subject-content">
{subject && (
   <TabNav subjectSlug={subject} />
)}
</div>
  )
}

export default GeneralSubjects