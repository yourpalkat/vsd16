import { Link } from "@tanstack/react-router";
import "./siteheader.css";

const SiteHeader = () => {
  return (
    <header className="gridWrapper">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src="public/assets/logos/vsd-white-inverse.png" alt="VSD 16" ariaLabel="Video Store Day Home" className="headerLogo" />
            </Link>
          </li>
          <li>
            <Link to="/about">About VSD</Link>
          </li>
          <li>
            <Link to="/stores">Find a Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;