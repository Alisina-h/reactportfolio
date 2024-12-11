import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  // Skapa ett tillstånd för att hålla reda på om menyn är öppen eller stängd
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funktion för att toggla menyn (öppna/stänga)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Växla mellan true och false för att öppna/stänga menyn
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h2>Alisina H.</h2>  {/* Här är p-taggen till vänster */}
          <div className="nav-right">
            {/* Menyn, visa den när isMenuOpen är true */}
            <ul className={isMenuOpen ? "active" : ""}>
              <li><a href="#home" className="menu-item">Home</a></li>
              <li><a href="#skills" className="menu-item">Skills</a></li>
              <li><a href="#projekt" className="menu-item">Projekt</a></li>
              <button className="contact-btn" onClick={() => { }}>Anställ Mig!</button>
            </ul>

            {/* Hamburgarikonen som togglar menyn */}
            <button className="menu-btn" onClick={toggleMenu}>
              <span className="fas fa-bars" style={{ fontSize: '2rem' }}>

              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
