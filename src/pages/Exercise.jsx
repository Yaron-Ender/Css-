import { Link, Outlet } from "react-router-dom";
function Exercise() {
  return (
    <div className="page">
<h1>Exercises page</h1>
<nav className="navbar">
<ul className="nav-menu">
<li className="nav-item">
<Link to="/exercise/grid" className="nav-link">
grid-excercise
</Link>
</li>
<li className='nav-item'>
  <Link to="/exercise/balls" className="nav-link">
  balls-move
  </Link>
</li>
</ul>
</nav>
<div className="content-card">
<Outlet />
</div>
</div>
);
}

export default Exercise;
