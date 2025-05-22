import { useState } from "react";
import { Link } from "react-router-dom";  // Importer Link de react-router-dom car lien de navigation interne 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Nav() {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <header className="container-fluid">
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className="navbar__links">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Nos Voyages</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Nos Services</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/contact" className="navbar__link">Nous contacter</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Bien se préparer</Link>
                    </li>
                </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
            </nav>
        </header>
    );
}

export default Nav;
