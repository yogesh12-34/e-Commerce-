import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice"
import cartReducer from "../features/cart/CartSlice"
import orderReducer from "../features/order/ordersSlice"
import userReducer from "../features/user/UserSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart :cartReducer,
    order:orderReducer,
    user:userReducer,
  },
});
