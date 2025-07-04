import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
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
  }
];
export default routes;