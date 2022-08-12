import { configureStore } from '@reduxjs/toolkit';

import buttonSlice from './slices/buttonSlice';

export const store = configureStore({
  reducer: {
    buttonSlice,
  },
});
