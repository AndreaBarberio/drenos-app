// src/slices/aboutSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchAbout = createAsyncThunk('about/fetchAbout', async () => {
  const res = await fetch('http://localhost:3001/about');

  if (!res.ok) {
    throw new Error('Errore nel caricamento dei dati About');
  }

  const data = await res.json();
  return data;
});

const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAbout.rejected, (state) => {
        state.loading = false;
        state.error = 'Errore nel caricamento dei dati About';
      });
  },
});

export default aboutSlice.reducer;
