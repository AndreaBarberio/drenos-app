import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md ml-2";

function DesktopNav({ logo: { src, alt }, links, productRoute, dropLabels, dropUrls }) {
  // state che apre e chiude la dropdown quando in hover
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <nav className="flex h-12 w-full bg-transparent text-gray-100" aria-label="Main navigation">

      <Link className={imgStyle} to="/"> <img src={src} alt={alt} /> </ Link>
      <ul className="flex flex-1 justify-evenly ml-2 flex-row self-center">
        {links.map((link, i) => {

          const isProducts = link.path === '/products';
          //estraiamo un booleano per renderizzare sotto prodotti la dropdown evitando che si propaghi sotto tutti i link della nav
          return (<>

            <li
              key={i}
              className="relative text-shadow-lg"
              onMouseEnter={() => isProducts && setIsDropdownOpen(true)}
              onMouseLeave={() => isProducts && setIsDropdownOpen(false)}
            >
              <Link to={link.path}>
                {link.meta?.label}
              </Link>

              {isProducts && isDropdownOpen && (
                <div className="absolute left-0 top-full z-10">
                  <Dropdown labels={dropLabels} urls={dropUrls} productRoute={productRoute} />
                </div>
              )}
            </li>
          </>
          );
        })}
      </ul>
      <img className={imgStyle + " hidden"} src={src} alt={alt} />
    </nav>
  );
}

export default DesktopNav;
