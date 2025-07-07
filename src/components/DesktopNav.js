import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import routes from "../routes/routes";

const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md ml-2";

function DesktopNav({ logo: { src, alt }, links }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const prodottiRoute = routes.find(route => route.path === '/prodotti');
  //
  const dropLabels = prodottiRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => child.meta.label);

  const dropUrls = prodottiRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => `/prodotti/${child.path}`);

  return (
    <nav className="flex h-12 w-full bg-transparent text-gray-100" aria-label="Main navigation">
      <img className={imgStyle} src={src} alt={alt} />
      <ul className="flex flex-1 justify-evenly ml-2 flex-row self-center">
        {links.map((link, i) => {
          const isProdotti = link.path === '/prodotti';

          return (
            <li
              key={i}
              className="relative text-shadow-lg"
              onMouseEnter={() => isProdotti && setIsDropdownOpen(true)}
              onMouseLeave={() => isProdotti && setIsDropdownOpen(false)}
            >
              <Link to={link.path}>
                {link.meta?.label}
              </Link>

              {isProdotti && isDropdownOpen && (
                <div className="absolute left-0 top-full z-10">
                  <Dropdown labels={dropLabels} urls={dropUrls} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <img className={imgStyle + " hidden"} src={src} alt={alt} />
    </nav>
  );
}

export default DesktopNav;
