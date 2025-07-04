const imgStyle = "self-center align-center h-8 w-8 rounded-md shadow-black shadow-md"

function DesktopNav({ logo: { src, alt }, links, onCartClick, userMenu, isLoggedIn }) {
  return (
    <nav className="flex justify-between h-12 w-full bg-slate-400" aria-label="Main navigation">
      <img className={imgStyle} src={src} alt={alt} />
      
    </nav>
  );
}

export default DesktopNav; 