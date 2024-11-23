import React, { useState } from "react";
import "./navbar.scss";

// logo
import logo from "../../assets/pngegg.png";

// burgerMenu
import { FaBars } from "react-icons/fa";

const ModularNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-elements">
        <a href="#">Login</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
      <FaBars className="navbar-menu-icon" onClick={toggleMenu} />

      <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-menu-item">Menu</div>
        <div className="navbar-menu-item">Profile</div>
        <div className="navbar-menu-item">Settings</div>
        <div className="navbar-menu-item">Pricing</div>
        <div className="navbar-menu-item">About</div>
      </div>
    </div>
  );
};

export default ModularNavbar;
