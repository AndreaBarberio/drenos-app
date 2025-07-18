import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"
// Importa i tuoi slice qui (anche se all'inizio non ne hai)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});