import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="nav">
          <ul>
              <li><img src="https://bulma.io/images/bulma-logo.png" alt="your mom" width="112" height="28" /></li>
              <li>Home</li>
          </ul>
          <ul>
              <li><a href="bulma.com" className="nav-login-btn">Login</a></li>
              <li><a href="bulma.com" className="nav-signup-btn">Signup</a></li>
          </ul>
        </nav>
    );
}

export default Navbar;