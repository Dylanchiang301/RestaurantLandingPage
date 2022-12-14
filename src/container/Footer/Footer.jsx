import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id="login">
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer_links'>
      <div className='app__footer_links_contact'>
        <h1 className='app__footer_headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer_links_logo'>
        <img src={images.gericht} alt="footer__logo"/>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}}/>
        <div className='app__footer_links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>

      <div className='app__footer_links_work'>
        <h1 className='app__footer_headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>

      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      <br></br>
      <p className='p__opensans'>Learn from:&nbsp;&nbsp;
      <a className='p__opensans' href='https://www.youtube.com/watch?v=4oV65GVVits&t=8146s'>this website</a>
      </p>
    </div>
  </div>
);

export default Footer;
