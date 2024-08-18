import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import usaFlag from '../assets/images/usa-flag.png';
import googlePay from '../assets/images/google-pay.png';
import applePay from '../assets/images/apple-pay.png';
import paypal from '../assets/images/paypal.png';
import amex from '../assets/images/amex.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h3>Be The First To Know</h3>
          <p>Sign up for updates from mettà muse.</p>
          <form>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-section footer-links">
          <div>
            <h4>mettà muse</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/artisans">Artisans</a></li>
              <li><a href="/boutiques">Boutiques</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/eu-compliance">EU Compliance Docs</a></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/shipping">Orders & Shipping</a></li>
              <li><a href="/seller">Join/Login as a Seller</a></li>
              <li><a href="/payment">Payment & Pricing</a></li>
              <li><a href="/returns">Return & Refunds</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <p>+44 221 133 5360</p>
          <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
          <div className="footer-currency">
            <h4>Currency</h4>
            <img src={usaFlag} alt="USA Flag" />
            <span>USD</span>
          </div>
        </div>

        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
          <h4>mettà muse Accepts</h4>
          <div className="footer-payment-icons">
            <img src={googlePay} alt="Google Pay" />
            <img src={paypal} alt="PayPal" />
            <img src={amex} alt="Amex" />
            <img src={applePay} alt="Apple Pay" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 mettà muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
