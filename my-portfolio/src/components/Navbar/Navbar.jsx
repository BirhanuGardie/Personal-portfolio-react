import React, { useState, useRef } from "react";
import './Nav.css'
import underline from '../../assets/nav_underline.SVG'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.SVG'
import menu_close from '../../assets/menu_close.SVG'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
   
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
          <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      </div>
    </div>
  );
};

export default Navbar;