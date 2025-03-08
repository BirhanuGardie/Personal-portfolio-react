import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.SVG'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p> I'm a full stack web developer from Southwest Ethiopia</p>
                
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'> &copy; 2025 Birhanu Gardie. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>Privacy policy</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
