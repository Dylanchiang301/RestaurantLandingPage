import React, {useState, useEffect} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import './Navbar.css';
// import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ui className="app__navbar-links">
        <li className='p__opensans'><a href='#home'>HOME</a></li>
        <li className='p__opensans'><a href='#about'>ABOUT</a></li>
        <li className='p__opensans'><a href='#menu'>MENU</a></li>
        <li className='p__opensans'><a href='#awards'>AWARDS</a></li>
        <li className='p__opensans'><a href='#contact'>CONTACT</a></li>
      </ui>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>LOG IN / REGISTER</a>
        <div/>
        <a href='/' className='p__opensans'>BOOK TABLE</a>
      </div>
      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ui className="app__navbar-smallscreen_links">
              <li className='p__opensans'><a href='#home'>HOME</a></li>
              <li className='p__opensans'><a href='#about'>ABOUT</a></li>
              <li className='p__opensans'><a href='#menu'>MENU</a></li>
              <li className='p__opensans'><a href='#awards'>AWARDS</a></li>
              <li className='p__opensans'><a href='#contact'>CONTACT</a></li>
           </ui>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar;
