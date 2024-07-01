import images2 from '../assets/images2.jpeg';
import images3 from '../assets/images3.jpg';
import images4 from '../assets/images4.jpeg';
import images5 from '../assets/images5.jpeg';
import images6 from '../assets/images6.jpeg';

import React from 'react';
import { Link } from 'react-router-dom';
import './Fiction.css';  // Ensure that your CSS file is imported

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='book-list'>
        <li>
          <Link to='/books/fiction1'>
            <img src={images2} alt="Logo1" className='book-logo' />
            <div className='book-details'>
              <h3>The Girls in His Shadow</h3>
              <h4>by sjfj</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/books/fiction2'>
            <img src={images3} alt="Logo2" className='book-logo' />
            <div className='book-details'>
              <h3>Book Title 2</h3>
              <h4>by Author 2</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/books/fiction3'>
            <img src={images4} alt="Logo3" className='book-logo' />
            <div className='book-details'>
              <h3>Book Title 3</h3>
              <h4>by Author 3</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/books/fiction4'>
            <img src={images5} alt="Logo4" className='book-logo' />
            <div className='book-details'>
              <h3>Book Title 4</h3>
              <h4>by Author 4</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/books/fiction5'>
            <img src={images6} alt="Logo5" className='book-logo' />
            <div className='book-details'>
              <h3>Book Title 5</h3>
              <h4>by Author 5</h4>
            </div>
          </Link>
        </li>
      </ul>
     
      </div>
    
  );
}

export default Navbar;
