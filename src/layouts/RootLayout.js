import routes from '../routes/routes';
import DesktopNav from '../components/DesktopNav';
import logo from "../assets/logo.png"
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  const navLinks = routes[0].children.filter(route => route.meta?.showInNav);

  return (
    <>
      <DesktopNav className="text-yellow-500" logo={{ src: logo, alt: "Logo" }} links={navLinks} />
      <main className="pt-16 px-4">
        <Outlet />
      </main>
    </>
  );
}