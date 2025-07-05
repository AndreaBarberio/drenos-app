import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';

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
  }
];
export default routes;