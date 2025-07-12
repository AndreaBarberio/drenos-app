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

  // Chiude la dropdown al cambio route
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
    /* <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[rgb(129,155,167)] bg-opacity-90 text-white border-t 
    border-gray-500 shadow-md backdrop-blur-sm z-50"> */
    /* <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 text-gray-800 border-t border-gray-300 
    shadow-lg backdrop-blur-md z-50">
     */
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-sm border-t border-gray-700 text-white z-50 shadow-lg">

      {dropdownOpen && (
        <div className="absolute bottom-full left-0 w-full max-h-[50vh] overflow-auto bg-[rgba(20,20,21,0.94)] backdrop-blur-xl shadow-lg border-t border-gray-200 ">
          <ul className="flex flex-col p-4 space-y-2">
            {dropLabels.map((label, idx) => (
              <li key={idx}>
                <Link
                  to={dropUrls[idx]}
                  className="block text-gray-700 px-4 py-2 hover:text-blue-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}


      <div className="flex justify-around items-center py-2">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <img src={logo.src} alt={logo.alt} className="h-6 w-auto mb-1 rounded-sm" />
        </Link>

        {/* Navigation icons */}
        {links.map((link, i) => {
          const isProducts = link.path === "/products";
          const icon = getIconForPath(link.path);

          return (
            <div
              key={i}
              className="relative flex flex-col items-center text-slate-800 hover:text-blue-600 focus:text-blue-600"
            >
              {isProducts ? (
                <button
                  onClick={toggleDropdown}
                  className="flex flex-col items-center focus:outline-none"
                >
                  <span className="text-xl">{icon}</span>
                </button>
              ) : (
                <Link to={link.path} className="flex flex-col items-center">
                  <span className="text-xl">{icon}</span>
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
