import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu"></div>
        <buttton className="desktopMenu">
            <img src="" alt="" className="destopMenuImg" />Contact Me
        </buttton>
    </nav>
  )
}

export default Navbar
