import './Navbar.css'
import { Link } from 'react-router-dom'
//import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {  

    //const [isOpen, setOpen] = useState(false)
    function HamburgerClosed() {
        return <h1>Open Menu</h1>;
      }

    return (
        <div className="navbar">
            <div>
            <h2 className="myIdentity">
            <span className="myTitle">Francesco</span>
            <span className="mySurname">Borrelli</span>
            </h2>
            </div>          

            <div className="hamburgerContainer">
            <Hamburger size={30} duration={0.4} color="white" onToggle={toggled => {
                if (toggled) {
                    <HamburgerClosed />// open a menu
                } else {
                    // close a menu
                }
            }} />
            </div>

            {/*<div className="hamburgerContainer">
                <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>*/}


            <div className="navLinks">
                <Link to="/portfolio" className="navbarText">Home</Link>
                <Link to="/portfolio/about" className="navbarText">About</Link>
                <Link to="/portfolio/contacts" className="navbarText">Contact</Link>
            </div>

        </div>
    )
}

export default Navbar;