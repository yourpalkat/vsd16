import { useState } from "react";
import { Link } from "@tanstack/react-router";
import "./siteheader.css";

const SiteHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = (event) => {
    setNavOpen(!navOpen);
  }

  return (
    <header className="gridWrapper">
      <nav className="desktopNav">
        <ul>
          <li>
            <Link to="/">
              <img src="/assets/logos/vsd-logo.png" alt="" aria-label="Video Store Day Home" className="headerLogo" />
            </Link>
          </li>
          <li className="desktop">
            <Link to="/about">About VSD</Link>
          </li>
          <li className="desktop">
            <Link to="/stores">Find a Store</Link>
          </li>
          <li className="desktop">
            <Link to="/register">Sign Up</Link>
          </li>
          <li className="desktop">
            <Link to="/merch">Merch</Link>
          </li>
          <li className="mobile">
            <button type="button" className="navButton" onClick={handleNavOpen} aria-label="Open/close mobile navigation">
              <img src={navOpen ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'} alt="" />
            </button>
          </li>
        </ul>

        <ul className={navOpen ? 'mobile mobileNav open' : 'mobile mobileNav'}>
          <li><Link to="/" onClick={handleNavOpen}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavOpen}>About VSD</Link></li>
          <li><Link to="/stores" onClick={handleNavOpen}>Find a Store</Link></li>
          <li><Link to="/register" onClick={handleNavOpen}>Sign Up</Link></li>
          <li><Link to="/merch" onClick={handleNavOpen}>Merch</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;