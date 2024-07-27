import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as MenuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order, { loader as OrderLoader } from './features/order/Order';
import './index.css';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <h1>fast react pizza</h1>
    </RouterProvider>
  );
}

export default App;
