import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/app_components.css';

function Header() {
  return (
    <header>
      <div className='landing'>
        <h3 className='land-title'>The Code Room</h3>
      </div>
    </header>
  )
}

function Navbar(){
  return(
    <nav className='navbar'>
      <NavLink to="/home" className='nav-item'>Home</NavLink>
      <NavLink to="/about" className='nav-item'>About</NavLink>
      <NavLink to="/articles" className='nav-item'>Articles</NavLink>
    </nav>
  )
}

export default {
  Header,
  Navbar
}
