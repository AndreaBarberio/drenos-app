import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import routes from "../routes/routes";

const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md ml-2";

function DesktopNav({ logo: { src, alt }, links }) {
  // state che apre e chiude la dropdown quando in hover
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // troviamo la categoria prodotti per impostare la caduta della dropdown
  const prodottiRoute = routes.find(route => route.path === '/prodotti');
  // estraggo le labels evitando ripetizioni
  const dropLabels = prodottiRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => child.meta.label);
  //facciamo la stessa cosa delle label, per il path, gestendo anche il caso in cui non siamo ancora in prodotti-page
  const dropUrls = prodottiRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => `/prodotti/${child.path}`);

  return (
    <nav className="flex h-12 w-full bg-transparent text-gray-100" aria-label="Main navigation">

      <Link className={imgStyle} to="/"> <img src={src} alt={alt} /> </ Link>
      <ul className="flex flex-1 justify-evenly ml-2 flex-row self-center">
        {links.map((link, i) => {

          const isProdotti = link.path === '/prodotti';
          //estraiamo un booleano per renderizzare sotto prodotti la dropdown evitando che si propaghi sotto tutti i link della nav
          return (<>

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
          </>
          );
        })}
      </ul>
      <img className={imgStyle + " hidden"} src={src} alt={alt} />
    </nav>
  );
}

export default DesktopNav;
