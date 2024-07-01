import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../assets/logo-black.png';
import toogle_light from '../assets/night.png';
import sarasavi from '../assets/image-sarasavi.webp';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <img src={logo_light} alt="Logo" className='logo' />
        <ul>
          <li><Link to="/logins/create">Home</Link></li>
          <li className='dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to="">Books</Link>
            {dropdownOpen && (
              <ul className='dropdown-menu'>
                <li><Link to="/books/fiction">Fiction</Link></li>
                <li><Link to="/books/non-fiction">Non-Fiction</Link></li>
                <li><Link to="/books/sci-fi">Sci-Fi</Link></li>
                <li><Link to="/books/fantasy">Fantasy</Link></li>
                <li><Link to="/books/mystery">Mystery</Link></li>
                <li><Link to="/books/romance">Romance</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/userprofile">User Profile</Link></li>
          <li><Link to="/feedbacks/all">Reviews</Link></li>
        </ul>
        <div className='search-box'>
        </div>
        <img src={toogle_light} alt="Toggle Icon" className='toggle-icon' />
      </div>
      <div className='sarasavi-container'>
        <img src={sarasavi} alt="Sarasavi" />
      </div>
    </div>
  );
}

export default Navbar;
