import React from 'react';
import "./footer.css";
import logofb from "../assets/facebook.webp";
import logowhatsapp from "../assets/whatsapp.png";
import logoinsta from "../assets/insta.jpeg";
import location from "../assets/location1.jpg";
import mail from "../assets/email.png";
import phone from "../assets/telephone.jpg";

function Footer() {
  return (
    <footer className="footer" style={{ padding: '0px', margin: '0 auto',height:'200px', maxWidth: '1200px' }}>
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">About</h2>
          <a href="/home" className="footer-link"></a>
          <div className='footer-details'>
            <div><img src={location} className="footer-icon" alt="location" /></div>
            <div>
              Suwasiripaya, No. 385,<br />
              Rev. Baddegama Wimalawansa Thero Mawatha,<br />
              Colombo 10, Sri Lanka.
            </div>
          </div>
        </div>
        <div className='footer-section'>
          <h2 className="footer-title">Contact Us</h2>
          <div className='footer-details'>
            <div><img src={mail} className="footer-icon" alt="mail" /></div>
            <div>
              <a href="mailto:ministryofhealth@gmail.com" className="footer-link">ministryofhealth@gmail.com</a>
            </div>
          </div>
          <div className='footer-details'>
            <div><img src={phone} className="footer-icon" alt="phone" /></div>
            <div>
              <a href="tel:0754616471" className="footer-link">075 461 6471</a>
            </div>
          </div>
        </div>
        <div className='footer-section'>
        
          <div className="footer-details">
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
          <div className="footer-details">
            <a href="#" className="footer-link">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <hr className="footer-divider"/>
      <div className="footer-lower">
        <div className="footer-copyright">
          © 2024 <a href="#" className="footer-link">Ministry Of Health</a>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
