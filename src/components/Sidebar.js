import './Sidebar.css'

function Sidebar() {  
      
    return (
        <div className="sidebar">
            <div>
            <h2 className="myIdentity">
            <span className="myTitle">Francesco</span>
            <span className="mySurname">Borrelli</span>
            </h2>
            </div>
        
            <div className="hamburgerContainer">
                <a href="" class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
            </div>

            <div className="navLinks">
            <p className="sidebarText">Home</p>
            <p className="sidebarText">About</p>
            <p className="sidebarText">Contact</p>
            </div>
        </div>
    )
}

export default Sidebar;