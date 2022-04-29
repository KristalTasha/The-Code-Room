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

function Sidebar() {
  return (
    <nav className='sidebar'>
      <NavLink to="/" className='nav-item'>
        <i class="fa-solid fa-house"></i>
        <p>Home</p>
      </NavLink>
      <NavLink to="/about" className='nav-item'>
        <i class="fa-solid fa-user-group"></i>
        <p>About</p>
      </NavLink>
      <NavLink to="/articles" className='nav-item'>
        <i class="fa-solid fa-newspaper"></i>
        <p>Articles</p>
      </NavLink>
    </nav>
  )
}


function Footer() {
  return (
    <footer>
      <div className='smicons'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-tiktok"></i>
      </div>
      <p className='foot-text'>Powered by KristalTasha</p>
    </footer>
  )
}


function Comments({reviews, artComms}) {
  
  return (
    
      <div className='comments'>
        <p className='comment-title'>Comments</p>
        {
          reviews.reverse().map(rev => (
            <div className='comment'>
              <p className='comment-text' key={rev.id}>{rev.userComment}</p>
              <p className='comment-name' key={rev.id}>{rev.userName}</p>
            </div>

          ))
        }


      </div>

  )
}


export default {
  Header,
  Sidebar,
  Footer,
  Comments
}
