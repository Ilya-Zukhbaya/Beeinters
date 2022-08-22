import { configureStore } from '@reduxjs/toolkit';

import buttonSlice from './slices/buttonSlice';
import favoriteSlice from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    buttonSlice,
    favoriteSlice,
  },
});
