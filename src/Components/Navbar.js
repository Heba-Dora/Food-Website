import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ReorderIcon from "@material-ui/icons/Reorder"
import '../Styles/Navbar.css'

function Navbar() {
    const [navbutton, setNavbutton] = useState(true)

    return (
        <div className="Navbar" >
            <div className="NavbarLeft" >
                <img alt="" src="https://www.sunvitd3.co.uk/wp-content/uploads/media_library_export-sunvitd3-2020_07_30_14_33_29/gluten-free-icon.png"/>
            </div>
            
          
            <div className="NavbarRight" >
                <div className="links" id={navbutton ? "hidden" : ""}>
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/dessert">Dessert</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                </div>
                
                <button onClick={()=> setNavbutton(!navbutton)}>
                    <ReorderIcon />
                </button>
            
            </div>

        </div>
    )
}

export default Navbar
