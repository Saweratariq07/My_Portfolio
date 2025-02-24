import React from 'react';
import {  FaInstagram} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
<li onClick={handleNav}>
<a href="" target="_blank" rel="noopener noreferrer" className="nav-link">
    <FaInstagram />
</a>

</li>
        <li onClick={handleNav}>
  <a href="https://www.facebook.com/share/15BW68zjED/" target="_blank" rel="noopener noreferrer" className="nav-link">
  <FaFacebookF />
  </a>
</li><li onClick={handleNav}>
  <a href="https://x.com/ZeerakZee" target="_blank" rel="noopener noreferrer" className="nav-link">
  <TiSocialTwitter />
  </a>
</li>

<li onClick={handleNav}>
  <a href="mailto:usmancharan007@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-link">
    <BiEnvelope />
  </a>
</li>

  </ul>
  )
};

export default NavLinks;
