import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"
import appReducer from './slices/appSlice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});