import React from "react";
import { Link } from "gatsby";
import { navBar, navLinks, navLinkText, siteTitle } from "./layout.module.css";

const Navbar = ({ title }) => {
  return (
    <nav className={navBar}>
      <img
        src="/renci-logo.png"
        alt="RENCI Logo"
        style={{ maxWidth: "100%" }}
      />
      <header className={siteTitle}>{title}</header>
      <div className={navLinks}>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
        <Link to="/about" className={navLinkText}>
          About
        </Link>
        <Link to="/archive" className={navLinkText}>
          Archive
        </Link>
        <Link to="/archive/2024-05/4.5" className={navLinkText}>
          Newest Edition
        </Link>
        <Link to="/settings" className={navLinkText}>
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
