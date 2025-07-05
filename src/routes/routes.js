import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Prodotti from '../pages/Prodotti';
import Profilo from '../pages/Profilo';
import Carrello from '../pages/Carrello';

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
        element: <Prodotti />,
        meta: { label: "Prodotti", showInNav: true }
      },
    ]
  },
  {
    path: '/Profilo',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire la navbar
    meta: { label: "Profilo", showInNav: true },
    children: [
      {
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
        element: <Carrello />,
        meta: { label: "Carrello", showInNav: true }
      },
    ]
  },
];
export default routes;