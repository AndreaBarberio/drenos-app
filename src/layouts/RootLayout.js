import routes from '../routes/routes';
import DesktopNav from '../components/Navbar/DesktopNav';
import { Outlet } from 'react-router-dom';
import logo from "../assets/drenos/logo.png"
import Footer from '../components/Footer/Footer';
import MobileNav from '../components/Navbar/MobileNav';

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
    <div className="flex flex-col w-full min-h-screen">

      <DesktopNav
        productRoute={productRoute}
        dropLabels={dropLabels}
        dropUrls={dropUrls}
        navLinks={navLinks}
        logo={{ src: logo, alt: "Logo" }}
        links={navLinks} />
        
      <MobileNav
        productRoute={productRoute}
        dropLabels={dropLabels}
        dropUrls={dropUrls}
        links={navLinks}
        logo={{ src: logo, alt: "Logo" }}
      />
      <main className="flex-1 mt-12 mb-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

