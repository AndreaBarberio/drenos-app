import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { ShoppingCart, User } from "lucide-react";

function DesktopNav({ logo: { src, alt }, links, productRoute, dropLabels, dropUrls }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mainLinks = links.filter(link => !["/cart", "/profile"].includes(link.path));

  return (
    <nav className="desktop-nav">
      {/* Logo */}
      <Link to="/" className="desktop-nav__logo">
        <img src={src} alt={alt} className="desktop-nav__logo-img" />
      </Link>

      {/* Main nav links */}
      <ul className="desktop-nav__list">
        {mainLinks.map((link, i) => {
          const isProducts = link.path === '/products';
          return (
            <li
              key={i}
              className="desktop-nav__item"
              onMouseEnter={() => isProducts && setIsDropdownOpen(true)}
              onMouseLeave={() => isProducts && setIsDropdownOpen(false)}
            >
              <Link to={link.path} className="desktop-nav__link">
                {link.meta?.label}
              </Link>

              {isProducts && isDropdownOpen && (
                <div className="desktop-nav__dropdown">
                  <Dropdown labels={dropLabels} urls={dropUrls} productRoute={productRoute} />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Extra icons */}
      <div className="desktop-nav__extras">
        <Link to="/cart" className="desktop-nav__icon-link">
          <ShoppingCart size={20} />
        </Link>
        <Link to="/profile" className="desktop-nav__icon-link">
          <User size={20} />
        </Link>
      </div>
    </nav>

  );
}

export default DesktopNav;
