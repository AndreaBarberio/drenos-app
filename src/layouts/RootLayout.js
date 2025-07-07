import routes from '../routes/routes';
import DesktopNav from '../components/DesktopNav';
import { Outlet } from 'react-router-dom';
import logo from "../assets/drenos/logo.png"
export default function RootLayout() {

  const navLinks = routes.filter(route => route.meta?.showInNav);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <DesktopNav logo={{ src: logo, alt: "Logo" }} links={navLinks} />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="h-16 bg-transparent text-center flex items-center justify-center">
        Footer
      </footer>
    </div>
  );
}

