import './navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/logo.png" alt="logo" className='logo' />
            <div className="desktopMenu">
               <a className="desktopMenuListItem">Play</a>
               <a className="desktopMenuListItem">How To</a>
               <a className="desktopMenuListItem">Get Out</a>

            </div>
             {/* eslint-disable-next-line react/no-unknown-property */}
            <div class="sioflex">
            <a className="desktopMenuListItem signin-out">Sign In/Out</a>
            </div>
            <button className='desktopMenuBtn'>
                
            </button>
        </nav>
    )
}

export default Navbar;