import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import routes from './routes/routes';
import './index.css';
import './styles/utilities.css';
const router = createBrowserRouter(routes);


function App() {

  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>;
}

export default App;