
import { Counter } from './features/counter/Counter';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  
  {
    path: "/login",
    element:<LoginPage></LoginPage>
  },
  {
    path: "/Signup",
    element:<SignupPage></SignupPage>
  },
  {
    path: "/Cart",
    element:<CartPage></CartPage>
  },
  {
    path: "/Checkout",
    element:<Checkout></Checkout>
  },
  {
    path: "/Product-Detail",
    element:<ProductDetailPage></ProductDetailPage>
  },
]);

function App() {
  return (
    <div >
     <RouterProvider router={router} />
      
     
    </div>
  );
}

export default App;
