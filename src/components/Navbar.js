import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {  

    const [navLinks, setNavLinks] = useState("navLinks hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setNavLinks("navLinks visible")
        } else {
            setNavLinks("navLinks hidden")
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <div className="navbar">
            <div>
                <h2 className="myIdentity">
                    <span className="myName">Francesco</span>
                    <span className="mySurname">Borrelli</span>
                </h2>
            </div>          

            <div className='navbarRight'>
                <div className="hamburgerContainer" onClick={updateMenu}>
                    <Hamburger size={30} duration={0.4} color="white" />
                </div>

                <ul className={navLinks}>
                    <li className='navLink'>
                        <Link to="/portfolio" className="navbarText">Home</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/portfolio/about" className="navbarText">About</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/portfolio/contacts" className="navbarText">Contact</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;