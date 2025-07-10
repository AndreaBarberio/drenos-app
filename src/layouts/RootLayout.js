import routes from '../routes/routes';
import DesktopNav from '../components/DesktopNav';
import { Outlet } from 'react-router-dom';
import logo from "../assets/drenos/logo.png"
import Footer from '../components/Footer/Footer';

export default function RootLayout() {

  const productRoute = routes.find(route => route.path === '/products');
  // estraggo le labels evitando ripetizioni

  const dropLabels = productRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => child.meta.label);

  //facciamo la stessa cosa delle label, per il path, gestendo anche il caso in cui non siamo ancora in products-page
  const dropUrls = productRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => `/products/${child.path}`);
  const navLinks = routes.filter(route => route.meta?.showInNav);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <DesktopNav productRoute={productRoute} dropLabels={dropLabels} dropUrls={dropUrls} navLinks={navLinks} logo={{ src: logo, alt: "Logo" }} links={navLinks} />
      <main className="flex-1 p-4 m-12   ">
        <Outlet />
      </main>
      {/*  <footer className="h-16 bg-transparent text-center flex items-center justify-center">
        Footer
      </footer> */}
      <Footer />
    </div>
  );
}

