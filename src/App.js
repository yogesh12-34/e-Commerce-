
import { Counter } from './features/counter/Counter';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import { useEffect } from 'react';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Protected from './features/auth/components/protected';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home></Home></Protected> ,
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
    element:<Protected><CartPage></CartPage></Protected>
  },
  {
    path: "/Checkout",
    element:<Protected><Checkout></Checkout></Protected>
  },
  {
    path: "/Product-Detail/:id",
    element:<Protected><ProductDetailPage></ProductDetailPage></Protected>
  },
]);

function App() {
  const dispatch= useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
    
  },[dispatch,user])
  return (
    <div >
     <RouterProvider router={router} />
      
     
    </div>
  );
}

export default App;
