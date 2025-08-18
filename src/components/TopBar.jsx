import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import '../style/topbar.css'; 
import logo from "../icons/icon.png";

export default function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="topbar">
            <div className="myName">
                <img src={logo} className="logo" />
                <h1>Soujanya</h1>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation links */}
            <div className={`elements ${isMenuOpen ? 'active' : ''}`}>
                <div>Home</div>
                <div>About</div>
                <div>Skills</div>
                <div>Project</div>
                <div>Contact</div>
            </div>
        </div>
    );
}