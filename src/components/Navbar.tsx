import { useState } from "react";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div className="navbar">
      <div className={`navbar-item-menu ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
        <div className="navbar-item active">HOME</div>
        <div className="navbar-item">ABOUT</div>
        <div className="navbar-item">PORTFOLIO</div>
        <div className="navbar-item">CONTACT</div>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
};
