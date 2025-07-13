import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Home,
  Info,
  Package,
  ShoppingCart,
  User
} from "lucide-react";

function MobileNav({ logo, links, dropLabels, dropUrls }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const getIconForPath = (path) => {
    switch (path) {
      case '/':
        return <Home size={20} />;
      case '/about':
        return <Info size={20} />;
      case '/products':
        return <Package size={20} />;
      case '/cart':
        return <ShoppingCart size={20} />;
      case '/profile':
        return <User size={20} />;
      default:
        return <Package size={20} />;
    }
  };

  return (
    <nav className="mobile-nav">
      {dropdownOpen && (
        <div className="mobile-nav-dropdown">
          <ul className="mobile-nav-dropdown-list">
            {dropLabels.map((label, idx) => (
              <li key={idx}>
                <Link
                  to={dropUrls[idx]}
                  className="mobile-nav-dropdown-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mobile-nav-inner">
        {/* Logo */}
        <Link to="/" className="mobile-nav-logo">
          <img src={logo.src} alt={logo.alt} className="mobile-nav-logo-img" />
        </Link>

        {/* Navigation icons */}
        {links.map((link, i) => {
          const isProducts = link.path === "/products";
          const icon = getIconForPath(link.path);

          return (
            <div
              key={i}
              className="mobile-nav-icon-wrapper"
            >
              {isProducts ? (
                <button
                  onClick={toggleDropdown}
                  className="mobile-nav-icon-button"
                >
                  <span className="mobile-nav-icon">{icon}</span>
                </button>
              ) : (
                <Link to={link.path} className="mobile-nav-icon-button">
                  <span className="mobile-nav-icon">{icon}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;
