import { Link } from "@tanstack/react-router";
import "./siteheader.css";

const SiteHeader = () => {
  return (
    <header className="gridWrapper">
      <nav>
        <ul>
          <li>
            <Link to="/">VSD 16</Link>
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