import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
               <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Home</Link>
               <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Post!</Link>
               <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Notifications</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Logout</Link>
            </div>
            <button className='desktopMenuBtn'>
                
            </button>
        </nav>
    )
}

export default Navbar;