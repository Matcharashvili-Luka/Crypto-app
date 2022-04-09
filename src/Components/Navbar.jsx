import React from 'react';
import '../Style/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Link to='/'>
      <div className='navbar'>
          <i className="fa-solid fa-coins"></i>
          <h1><span>Coin</span> Search</h1>
      </div>
    </Link>
  )
}

export default Navbar