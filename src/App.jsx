import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Mainlayout from "./layoutes/Mainlayout";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
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

        <Route path="/subjects" element={<Subjects />}>
          <Route path=":subject" element={<SubjectPrinciples />} />
          <Route path=":subject/principles" element={<SubjectPrinciples />} />
          <Route path=":subject/projects" element={<ProjectList />} />
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
