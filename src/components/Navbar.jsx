import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <div>
     
<div className="nav-bar">
  <div className="logo">
    <img src={assets.logo} alt="Logo" />
  </div>
  <ul className='nav-links'>
  <li><NavLink to="/" className="link">HOME</NavLink></li>
  <li><NavLink to="/collection" className="link">COLLECTION</NavLink></li>
  <li><NavLink to="/about" className="link">ABOUT</NavLink></li>
  <li><NavLink to="/contact" className="link">CONTACT</NavLink></li>

  </ul>
  <div className='element'>
    <img src={assets.search_icon} alt="" />
<div className='profile-container'>
    <img src={assets.profile_icon} alt=""  className='profile-image' onClick={()=>setOpen(!open)}/>
    {open && (
        <ul className="dropdown-menu">
          <li>My Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
    )}

</div>
</div>
</div>

<div className="elements">
   
</div>
    </div>
  )
}

export default Navbar