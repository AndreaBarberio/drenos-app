import { Link } from "react-router-dom";



const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md"

function DesktopNav({ logo: { src, alt }, links, onCartClick, userMenu, isLoggedIn }) {
  return (
    <nav className="flex justify-between h-12 w-full bg-slate-400" aria-label="Main navigation">
      <img className={imgStyle} src={src} alt={alt} />
      <ul>
        {links.map(link => (
          <li key={link.meta.path}>
            <Link to={link.meta.path}>{link.meta.label}</Link>
          </li>
        ))}
      </ul>
    </nav >
  );
}

export default DesktopNav; 