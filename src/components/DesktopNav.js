import { Link } from "react-router-dom";



const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md ml-2"

function DesktopNav({ logo: { src, alt }, links, onCartClick, userMenu, isLoggedIn }) {
  links.map((link) => console.log("link", link))

  return (
    <nav className="flex h-12 w-full bg-transparent text-gray-100  " aria-label="Main navigation">
      <img className={imgStyle} src={src} alt={alt} />
      <ul className="flex flex-1 justify-evenly ml-2  flex-row  self-center" >
        {links.map((link, i) => (
          <li className="text-shadow-lg" key={i}>
            <Link to={link.path}>
              {link.meta?.label}
            </Link>
          </li>
        ))}
      </ul>
      <img className={imgStyle + " hidden"} src={src} alt={alt} />

    </nav >
  );
}

export default DesktopNav; 