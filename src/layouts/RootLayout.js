import DesktopNav from '../components/Navbar/DesktopNav';
import { Outlet } from 'react-router-dom';
import logo from "../assets/drenos/logo.png";
import Footer from '../components/Footer/Footer';
import MobileNav from '../components/Navbar/MobileNav';
import ChargeSpinner from '../components/Charging/ChargeSpinner';

import { useEffect, useState } from 'react';

export default function RootLayout() {
  const [routesData, setRoutesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await fetch("http://localhost:3001/routes"); // 
        const data = await res.json();
        setRoutesData(data);
        console.log("Fetched routes:", data);
      } catch (error) {
        console.error("Errore nel fetch delle routes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  if (loading || !routesData) return <ChargeSpinner />

  const productRoute = routesData.find(route => route.path === '/products');

  const dropLabels = productRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => child.meta.label);

  const dropUrls = productRoute?.children
    ?.filter(child => child.meta?.showInDropdown)
    .map(child => `/products/${child.path}`);

  const navLinks = routesData.filter(route => route.meta?.showInNav);

  return (
    <div className="d-container">
      <DesktopNav
        productRoute={productRoute}
        dropLabels={dropLabels}
        dropUrls={dropUrls}
        navLinks={navLinks}
        logo={{ src: logo, alt: "Logo" }}
        links={navLinks}
      />

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
