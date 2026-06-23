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
      <nav>
        <ul className="desktopNav">
          <li>
            <Link to="/">
              <img src="public/assets/logos/vsd-white-inverse.png" alt="" ariaLabel="Video Store Day Home" className="headerLogo" />
            </Link>
          </li>
          <li className="desktop">
            <Link to="/about">About VSD</Link>
          </li>
          <li className="desktop">
            <Link to="/stores">Find a Store</Link>
          </li>
          <li className="desktop">
            <Link to="/merch">Merch</Link>
          </li>
          <li className="mobile">
            <button type="button" className="navButton" onClick={handleNavOpen} ariaLabel="Open/close mobile navigation">
              <img src={navOpen ? '/public/assets/icons/close.svg' : '/public/assets/icons/menu.svg'} alt="" />
            </button>
          </li>
        </ul>

        <ul className={navOpen ? 'mobile mobileNav open' : 'mobile mobileNav'}>
          <li><Link to="/" onClick={handleNavOpen}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavOpen}>About VSD</Link></li>
          <li><Link to="/stores" onClick={handleNavOpen}>Find a Store</Link></li>
          <li><Link to="/merch" onClick={handleNavOpen}>Merch</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;