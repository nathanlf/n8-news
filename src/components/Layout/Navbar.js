import React from "react";
import { Link } from "gatsby";
import { navBar, navLinks, navLinkText } from "./layout.module.css";

const Navbar = () => {
  return (
    <nav className={navBar}>
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
