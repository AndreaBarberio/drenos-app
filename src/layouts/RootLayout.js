import routes from '../routes/routes';
import DesktopNav from '../components/DesktopNav';
import logo from "../assets/logo.png"
import { Outlet } from 'react-router-dom';

export default function RootLayout() {

  const navLinks = routes.map(route => route.meta?.showInNav ? route : null);


  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNav logo={{ src: logo, alt: "Logo" }} links={navLinks} />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="h-16 bg-gray-200 text-center flex items-center justify-center">
        Footer da creare
      </footer>
    </div>
  );
}

