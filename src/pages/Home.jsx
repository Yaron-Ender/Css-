import { Outlet} from "react-router-dom";


function Home() {
  return (
    <div className="page">
      <Outlet />
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our React Router application.</p>
      <div className="content-card">
        <h2>Getting Started</h2>
        <p>Navigate through the different pages using the navigation menu above.</p>
        <ul>
          <li>Home - You are here</li>
          <li>About - Learn more about us</li>
          <li>Services - Discover our services</li>
          <li>Contact - Get in touch</li>
        </ul>
      </div>
      
    </div>

  );
}

export default Home;