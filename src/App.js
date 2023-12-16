
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
import { selectloggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import OrderSuccessPaage from './pages/orderSuccessPage';
import UserOrdersPage from './pages/UserOrderPage';
import UserProfile from './features/user/components/userProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUser } from './features/user/userAPI';
import { fetchLoggedInUserAsync } from './features/user/UserSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home></Home></Protected> ,
  },
  {
    path: "/admin",
    element:<ProtectedAdmin><AdminHome></AdminHome></ProtectedAdmin> ,
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
    path: "/admin/Product-Detail/:id",
    element:<ProtectedAdmin><AdminProductDetailPage></AdminProductDetailPage></ProtectedAdmin>
  },
  {
    path: "/admin/Product-form",
    element:<ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>
  },
  {
    path: "/admin/orders",
    element:<ProtectedAdmin><AdminOrdersPage></AdminOrdersPage></ProtectedAdmin>
  },
  {
    path: "/admin/Product-form/edit/:id",
    element:<ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>
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
    path: `/logout`,
    element:(
    <Logout></Logout>)
  },
  {
    path: `/forgot-password`,
    element:(
    <ForgotPasswordPage></ForgotPasswordPage>)
  },
  {
    path: "*",
    element:(
    <PageNotFound></PageNotFound>)
  },
 
]);

function App() {
  const dispatch= useDispatch()
  const user = useSelector(selectloggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync())
      dispatch(fetchLoggedInUserAsync())
    }
    
  },[dispatch,user])
  return (
    <div >
     <RouterProvider router={router} />
     {/* / ///link must be the inside provider */}
     
    </div>
  );
}

export default App;
