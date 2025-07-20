import { Outlet} from "react-router-dom";
import Nav from '../components/Nav';
function Mainlayout() {
  return (
    <div className='layout'>
    <Nav />
  <Outlet />
    </div>
  );
}

export default Mainlayout;