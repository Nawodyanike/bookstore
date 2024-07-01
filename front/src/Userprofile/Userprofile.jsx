import React from 'react';
import { Link } from 'react-router-dom';
import user_image from '../assets/images1.png';
import sarasavi from '../assets/image-sarasavi.webp';

const Navbar = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#ADD8E6' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/Userprofile/accounts" style={{ textDecoration: 'none', color: '#000' }}>My Account</Link></li>
          <li><Link to="/registers/create" style={{ textDecoration: 'none', color: '#000' }}>Registration</Link></li>
          <li><Link to="/orders/history" style={{ textDecoration: 'none', color: '#000' }}>Payments</Link></li>
          <li><Link to="/registers/create" style={{ textDecoration: 'none', color: '#000' }}>Reset Password</Link></li>
          <li><Link to="/reviews" style={{ textDecoration: 'none', color: '#000' }}>Logout</Link></li>
        </ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', backgroundImage: `url(${sarasavi})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '450px' }}>
        {/* You can remove this img tag since the image is now set as a background */}
        {/* <img 
          src={sarasavi} 
          alt="Sarasavi" 
          style={{ width: '100%', height: 'auto' }} 
        /> */}
      </div>
    </div>
  );
}

export default Navbar;
