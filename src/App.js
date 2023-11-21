
import { Counter } from './features/counter/Counter';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import { useEffect } from 'react';
import UserOrders from './features/user/components/userOrder';



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
import PageNotFound from './pages/404';
import OrderSuccessPaage from './pages/orderSuccessPage';
import UserOrdersPage from './pages/UserOrderPage';
import UserProfile from './features/user/components/userProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUser } from './features/user/userAPI';
import { fetchLoggedInUserAsync } from './features/user/UserSlice';



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
  {
    path: `/order-success/:id`,
    element:(
    <OrderSuccessPaage></OrderSuccessPaage>)
  },
  {
    path: `/orders`,
    element:(
    <UserOrdersPage></UserOrdersPage>)
  },
  {
    path: `/profile`,
    element:(
    <UserProfilePage></UserProfilePage>)
  },
  {
    path: "*",
    element:(
    <PageNotFound></PageNotFound>)
  },
 
]);

function App() {
  const dispatch= useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
    
  },[dispatch,user])
  return (
    <div >
     <RouterProvider router={router} />
      
     
    </div>
  );
}

export default App;
