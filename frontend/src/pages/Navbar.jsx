import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
// import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;


const Navbar = (props) => {
  const { content } = props;
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  function Logout() {
    localStorage.clear();
    return <Navigate to="/register" />;
  }
  
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: drawerWidth }}>
        <ul>
          <li key={1}>
            <Link to="/" className={path === "/home" ? "selected" : ""}>
              Home
            </Link>
          </li>
          <li key={2}>
            <Link to="/about" className={path === "/about" ? "selected" : ""}>
              About
            </Link>
          </li>
          <li key={3}>
            <Link to="/logout" className={path === "/logout" ? "selected" : ""}>Logout</Link>
          </li>
        </ul>
      </nav>
      <div style={{ flexGrow: 1 }}>
        
        {content}
      </div>
    </div>
    
  );
};

export default Navbar;
