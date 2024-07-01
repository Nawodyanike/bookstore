import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
//import Footer from '../pages/Footer.jsx'; // Ensure the path is correct and case-sensitive

const Welcome = () => {
  return (
    <div>
      <div className="homepage">
        <div className="buttons-container">
          <Link to="/logins/create">
            <button className="button">
              <h3>Login</h3>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
