import { Link } from "react-router-dom";
import { useState } from "react";


function MobileNav({ logo: { src, alt }, links, productRoute, dropLabels, dropUrls }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <nav className="h-full w-8 bg-transparent text-gray-100" aria-label="Main navigation">
      <Link className={imgStyle} to="/"> <img src={src} alt={alt} /> </ Link>

      <div className=''> </div>
    </nav>
  );
}

export default MobileNav;   