import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="nav-logo">
                <a href="#"><h1>MovieMatic.</h1></a>
            </div>
            <div className="nav-elements">
                <a href="#">Home</a>
                <a href="#">About</a>
                <div className="nav-cta">
                    <a href="#">Owner</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;