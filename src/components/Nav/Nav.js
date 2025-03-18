
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Nav(){

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            
            <ul className="navbar__links">
                <li className="navbar__item">
                    <a href="/" className="navbar__link">
                    Nos Voyages
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/" className="navbar__link">
                    Nos Services
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/" className="navbar__link">
                    Nous contacter
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/" className="navbar__link">
                    Bien se préparer
                    </a>
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>

        </nav>
    )
}


export default Nav;
