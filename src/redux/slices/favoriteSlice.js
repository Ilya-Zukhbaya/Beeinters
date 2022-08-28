import { createSlice } from '@reduxjs/toolkit';
import { getFavoritesFromLs } from '../../utils/getFavoritesFromLs';

const favoritesData = getFavoritesFromLs();

const initialState = {
  items: favoritesData.items,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (!findItem) {
        state.items.push({ ...action.payload });
      } else {
        findItem.count = 1;
      }
    },
    removeFromFavorite(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});
export const selectCartItemById = (id) => (state) =>
  state.favoriteSlice.items.find((obj) => obj.id === id);

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
