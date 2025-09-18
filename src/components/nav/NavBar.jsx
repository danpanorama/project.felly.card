import React, { useState } from 'react';
import '../../css/Navbar.css';
import { FaFacebookF, FaInstagram, FaShareAlt } from 'react-icons/fa';
import LogoCircle from '../opening/LogoCircle';
import NavLogoMenu from './NavLogoMenu';
import FellyLogoSmall from '../../assets/fellylogosmall.png'
export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <div className="logoNavBar">

            <img src={FellyLogoSmall} className='img' alt="" />
          </div>
          <div className="mobile-menu-button" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </header>

      <div className={`side-drawer ${open ? 'open' : ''}`}>


<div className="flexCenter">
  <NavLogoMenu/>

</div>
        <nav className="drawer-links">
          <a href="/">בית</a>
          <a href="/about">אודות</a>
          <a href="/contact">צור קשר</a>
        </nav>
        <div className="drawer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaShareAlt /></a>
        </div>
      </div>

      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}
