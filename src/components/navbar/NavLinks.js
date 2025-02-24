import React from 'react';
import { FaLinkedin, FaInstagram} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
<li onClick={handleNav}>
<a href="" target="_blank" rel="noopener noreferrer" className="nav-link">
    <FaInstagram />
</a>

</li>
        <li onClick={handleNav}>
  <a href="" target="_blank" rel="noopener noreferrer" className="nav-link">
    <FaLinkedin />
  </a>
</li><li onClick={handleNav}>
  <a href="" target="_blank" rel="noopener noreferrer" className="nav-link">
    <BsGithub />
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
