import React from 'react'
import footer_logo from '../Assets/logo..png'
import './Footer.css'
import social_icons from '../Assets/Cart Icons.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <h2>Shopper</h2>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={social_icons} alt="whatsapp icon" />
            </div>
            <div className="footer-icons-container">
                <img src={social_icons} alt="instagram icon" />
            </div>
            <div className="footer-icons-container">
                <img src={social_icons} alt="facebook icon" />
            </div>
        </div>
        <div className="footer-copyright">  
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer