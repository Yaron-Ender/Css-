import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route } from "react-router-dom";
import Mainlayout from './layoutes/Mainlayout';
import Nav from './components/Nav';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import GridExc from './excersices/GridExc'
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
      <Route index element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      </Route>
      
    )    
  )
  return (
     <RouterProvider router={router} /> 
  );
}

export default App;