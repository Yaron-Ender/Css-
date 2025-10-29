import { Outlet} from "react-router-dom";
import MainNav from '../components/MainNav';
function Mainlayout() {
  return (
    <div className='layout'>
    <MainNav/>
  <Outlet />
    </div>
  );
}

export default Mainlayout;