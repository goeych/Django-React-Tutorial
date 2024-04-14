import {React,useState} from 'react';
import '../styles/Navbar.css'
import { Link,NavLink, useLocation, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;


const Navbar = (props) => {
  const { content } = props;
  const [menuOpen,setMenuOpen] = useState(false)
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  function Logout() {
    localStorage.clear();
    return <Navigate to="/register" />;
  }
  
  return (
    <div>
      <nav>
      {/* <Link to="/" className={path === "/home" ? "selected" : ""}> */}
      <Link to="/" className="title">
              Home
            </Link>
            <div 
              className="menu"
              onClick={() => {
                setMenuOpen(!menuOpen)
                }
              }>
              <span></span>
              <span></span>
              <span></span>
            </div>
        <ul className={menuOpen ? "open":""}>
          <li key={1} >
            
          </li>
          <li key={2}>
            <NavLink to="/about" className={path === "/about" ? "selected" : ""}>
              About
            </NavLink>
          </li>
          <li key={3}>
            <NavLink to="/logout" className={path === "/logout" ? "selected" : ""}>Logout</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        
        {content}
      </div>
    </div>
    
  );
};

export default Navbar;
