import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nav.css";

function Nav(){

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return(
        <header className="container-fluid">
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
        </header>
    )
}


export default Nav;
