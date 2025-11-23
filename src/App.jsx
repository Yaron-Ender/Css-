import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Mainlayout from "./layoutes/Mainlayout";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import SubjectsLandingLayout from "./layoutes/SubjectsLandingLayout";
import Shadowing from "./projects/shadowing/Shadowing"
import Animation from "./projects/animation/Animation"
import DOMcordination from "./projects/DOM cordination/DOMcordination"
import GeneralSubjects from "./projects/generalSubjects/GeneralSubjects";
import SubjectPrinciples from "./pages/SubjectPrinciples";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />

        <Route path="/css" element={<Subjects />}>
        <Route index element={<SubjectsLandingLayout />} />
        <Route path ='shadowing' element = {<Shadowing />} />
        <Route path ='animation' element = {<Animation />} />
        <Route path ='DOMcordination' element = {<DOMcordination />} />
        <Route path ='general' element = {<GeneralSubjects />} />
         <Route path="general/:subject" element={<GeneralSubjects />} />
         {/*ProjList-is the card grid of the projects */}
          <Route path=":subject/projects" element={<ProjectList />} />
          {/*ProjectDetail comp is not in used right now */}
          <Route
            path=":subject/projects/:projectSlug"
            element={<ProjectDetail />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
