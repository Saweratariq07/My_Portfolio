import React from 'react';
import { FaLinkedin, FaInstagram} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
<li onClick={handleNav}>
<a href="https://www.instagram.com/saweratariq567/" target="_blank" rel="noopener noreferrer" className="nav-link">
    <FaInstagram />
</a>

</li>
        <li onClick={handleNav}>
  <a href="https://www.linkedin.com/in/saweratariq" target="_blank" rel="noopener noreferrer" className="nav-link">
    <FaLinkedin />
  </a>
</li><li onClick={handleNav}>
  <a href="https://github.com/Saweratariq07/" target="_blank" rel="noopener noreferrer" className="nav-link">
    <BsGithub />
  </a>
</li>

<li onClick={handleNav}>
  <a href="mailto:saweratariq567@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-link">
    <BiEnvelope />
  </a>
</li>

  </ul>
  )
};

export default NavLinks;
