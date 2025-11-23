import { Outlet} from "react-router-dom";
import MainNav from '../components/MainNav';
function Mainlayout() {
  return (
    <div className='main-layout'>
    <MainNav/>
  <Outlet />
    </div>
  );
}

export default Mainlayout;