import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';

const Navbar = () => {
  return (
    <> 
      <nav>

        <div>
          <img className="logo" src={logo} />
        </div>

        <ul>

          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>Your Page</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar