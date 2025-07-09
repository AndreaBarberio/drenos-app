import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import Smartphone from '../pages/Products/Smartphone/Smartphone';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound/NotFound';
import Notebook from '../pages/Products/Notebook/Notebook';
import Cart from '../pages/Cart/Cart';
import Accessories from '../pages/Products/Accessories/Accessories';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    meta: { label: "Home", showInNav: false },
    children: [
      {
        index: true,          // rende questa la route di default per `/`
        element: <Home />,
      },
    ]
  },
  {
    path: '/about',
    element: <RootLayout />,
    // meta è facoltativo, ma servirà per costruire routes e soprattutto nested routes
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
    path: '/products',
    element: <RootLayout />,

    meta: { label: "Products", showInNav: true },
    children: [

      {
        index: true,
        element: <Products />,
        meta: { label: "Products", showInNav: true }
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
        path: 'accessories',
        element: <Accessories />,
        meta: { label: "Accessories", showInDropdown: true }
      }
    ]
  },
  {
    path: '/profile',
    element: <RootLayout />,
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
    path: '/Cart',
    element: <RootLayout />,
    meta: { label: "Cart", showInNav: true },
    children: [
      {
        index: true,
        element: <Cart />,
        meta: { label: "Cart", showInNav: true }
      },
    ]
  },
  { // se il path non è gestito nelle rotte ---> 404! 
    path: '*',
    element: <NotFound />
  }
];
export default routes;