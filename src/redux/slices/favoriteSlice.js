import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (!findItem) {
        state.items.push({ ...action.payload });
      }
    },
    removeFromFavorite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
