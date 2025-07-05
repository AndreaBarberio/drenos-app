import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    // meta è facoltativo, ma ti servirà per costruire la navbar
    meta: { label: "Home", showInNav: true },
    children: [
      {
        index: true,          // rende questa la route di default per `/`
        element: <Home />,
        meta: { label: "Home", showInNav: true }
      },
      // altre route figlie...
    ]
  },
  {
    path: '/About',
    element: <RootLayout />,
    // meta è facoltativo, ma ti servirà per costruire la navbar
    meta: { label: "About", showInNav: true },
    children: [
      {
        index: true,          // rende questa la route di default per `/`
        element: <About />,
        meta: { label: "About", showInNav: true }
      },
      // altre route figlie...
    ]
  }
];
export default routes;