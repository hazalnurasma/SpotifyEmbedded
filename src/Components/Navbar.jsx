import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/HomePage");
  };

  const handleGoBlog = () => {
    navigate("/BlogPage");
  };

  const handleGoSpoti = () => {
    navigate("/SpotifyEmbedded");
  };

  return (
    <> 
      <nav>

        <div>
          <img className="logo" src={logo} />
        </div>

        <ul>

          <li>
            <p onClick={handleGoHome}>Home</p>
          </li>
          <li>
            <p onClick={handleGoBlog}>Blog</p>
          </li>
          <li>
            <p onClick={handleGoSpoti}>Your Page</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar