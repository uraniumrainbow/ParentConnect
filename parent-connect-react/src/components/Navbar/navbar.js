import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
               <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Play</Link>
               <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">How To</Link>
               <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem">Get Out</Link>

            </div>
            <div class="sioflex">
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={450} className="desktopMenuListItem signin-out">Sign In/Out</Link>
            </div>
            <button className='desktopMenuBtn'>
                
            </button>
        </nav>
    )
}

export default Navbar;