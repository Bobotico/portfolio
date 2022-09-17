import './Navbar.css'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

function Navbar() {  

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="navbar">
            <div>
            <h2 className="myIdentity">
            <span className="myTitle">Francesco</span>
            <span className="mySurname">Borrelli</span>
            </h2>
            </div>
        
            <Hamburger direction="right" size={32} color="red" duration={0.1} onToggle={toggle=>{
                if(toggle){
                    console.log('open menu');
                } else {
                    console.log('open menu');
                }

            }} />
            

            <div className="hamburgerContainer">
                <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>


            <div className="navLinks">
                <Link to="/portfolio" className="navbarText">Home</Link>
                <Link to="/portfolio/about" className="navbarText">About</Link>
                <Link to="/portfolio/contacts" className="navbarText">Contact</Link>
            </div>

        </div>
    )
}

export default Navbar;