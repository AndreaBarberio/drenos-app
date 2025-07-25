import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"
import appReducer from './slices/appSlice';
import aboutReducer from "./slices/aboutSlice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    products: productsReducer,
    about: aboutReducer,

  },
});