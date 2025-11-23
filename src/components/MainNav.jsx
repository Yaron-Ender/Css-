import { Link, useLocation } from 'react-router-dom';

function MainNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/css', label: 'Css' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar-main">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MyApp
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;