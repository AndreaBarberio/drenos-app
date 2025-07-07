import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Prodotti from '../pages/Products/Products';
import Carrello from '../pages/Cart/Cart';
import Smartphone from '../pages/Products/Smartphone/Smartphone';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound/NotFound';
import Notebook from '../pages/Products/Notebook/Notebook';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    meta: { label: "Home", showInNav: true },
    children: [
      {
        index: true,          // rende questa la route di default per `/`
        element: <Home />,
        meta: { label: "Home", showInNav: true }
      },
    ]
  },
  {
    path: '/about',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire la navbar
    meta: { label: "About", showInNav: true },
    children: [
      {
        index: true,
        element: <About />,
        meta: { label: "About", showInNav: true }
      },
    ]
  },
  {
    path: '/prodotti',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire la navbar
    meta: { label: "Prodotti", showInNav: true },
    children: [

      {
        index: true,
        element: <Prodotti />,
        meta: { label: "Prodotti", showInNav: true }
      },
      {
        path: 'smartphone',
        element: <Smartphone />,
        meta: { label: "Smartphone", showInDropdown: true }
      },
      {
        path: 'notebook',
        element: <Notebook />,
        meta: { label: "Notebook", showInDropdown: true }
      },
      {
        path: 'accessories', // per ora label fittizie da mostrare nella dropdown
        element: <Prodotti />, // per adesso non avendo ancora le subcategories mandiamo ancora a Prodotti, resta da implementare :D 
        meta: { label: "Accessories", showInDropdown: true }
      }
    ]
  },
  {
    path: '/profile',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire la navbar
    meta: { label: "Profile", showInNav: true },
    children: [
      {
        index: true,
        element: <Profile />,
        meta: { label: "Profile", showInNav: true }
      },
    ]
  },
  {
    path: '/Carrello',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire la navbar
    meta: { label: "Carrello", showInNav: true },
    children: [
      {
        index: true,
        element: <Carrello />,
        meta: { label: "Carrello", showInNav: true }
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];
export default routes;