import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const location = useLocation();

  return (
    <div className='nav-container'>
      <nav>
        <ul className='menu'>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/chat' ? 'active' : ''}>
            <Link to="/chat">Chat</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
