import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Prodotti from '../pages/Products/Products';
import Profilo from '../pages/Profile/Profile';
import Carrello from '../pages/Cart/Cart';

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
    path: '/About',
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
    path: '/Prodotti',
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
        element: <Prodotti />,
        meta: { label: "Smartphone", showInDropdown: true }
      },
      {
        path: 'notebook',
        element: <Prodotti />,
        meta: { label: "Notebook", showInDropdown: true }
      },
      {
        path: 'accessori', // per ora label fittizie da mostrare nella dropdown
        element: <Prodotti />, // per adesso non avendo ancora le subcategories mandiamo ancora a Prodotti, resta da implementare :D 
        meta: { label: "Accessori", showInDropdown: true }
      }
    ]
  },
  {
    path: '/Profilo',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire la navbar
    meta: { label: "Profilo", showInNav: true },
    children: [
      {
        index: true,
        element: <Profilo />,
        meta: { label: "Profilo", showInNav: true }
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
];
export default routes;