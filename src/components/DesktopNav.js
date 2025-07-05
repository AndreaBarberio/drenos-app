import { Link } from "react-router-dom";



const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md"

function DesktopNav({ logo: { src, alt }, links, onCartClick, userMenu, isLoggedIn }) {
  links.map((link) => console.log("link", link))

  return (
    <nav className="h-12 w-full bg-slate-400 text-gray-500" aria-label="Main navigation">
      <img className={imgStyle} src={src} alt={alt} />
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.path}>
              {link.meta?.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav >
  );
}

export default DesktopNav; 