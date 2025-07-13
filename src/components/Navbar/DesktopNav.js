import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { ShoppingCart, User } from "lucide-react";

function DesktopNav({ logo: { src, alt }, links, productRoute, dropLabels, dropUrls }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mainLinks = links.filter(link => !["/cart", "/profile"].includes(link.path));

  return (
    <nav className="flex gap-8 h-12 w-full md:bg-transparent text-gray-200 text-lg font-semibold fixed top-0 left-0 md:border-b border-gray-600 z-50 md:backdrop-blur-md px-4 items-center">
      {/* Logo */}
      <Link to="/" className="h-8 w-8 hidden md:flex rounded-md shadow-black shadow-md">
        <img src={src} alt={alt} className="h-full w-full object-contain" />
      </Link>

      {/* Main nav links */}
      <ul className="flex flex-1 justify-start gap-12 ml-6">
        {mainLinks.map((link, i) => {
          const isProducts = link.path === '/products';
          return (
            <li
              key={i}
              className="hidden md:flex md:relative text-shadow-lg"
              onMouseEnter={() => isProducts && setIsDropdownOpen(true)}
              onMouseLeave={() => isProducts && setIsDropdownOpen(false)}
            >
              <Link to={link.path} className="hover:text-blue-300 transition-colors">
                {link.meta?.label}
              </Link>

              {isProducts && isDropdownOpen && (
                <div className="absolute left-0 top-full z-10">
                  <Dropdown labels={dropLabels} urls={dropUrls} productRoute={productRoute} />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Extra icons */}
      <div className="flex gap-4 items-center">
        <Link to="/cart" className="hover:text-blue-300 transition-colors text-slate-800 md:text-gray-200">
          <ShoppingCart size={20} />
        </Link>
        <Link to="/profile" className="hover:text-blue-300 transition-colors text-slate-800 md:text-gray-200">
          <User size={20} />
        </Link>
      </div>
    </nav>
  );
}

export default DesktopNav;
