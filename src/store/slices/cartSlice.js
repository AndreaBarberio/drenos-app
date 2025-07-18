import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.total = calculateTotal(state.items);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.total = calculateTotal(state.items);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
      state.total = calculateTotal(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
