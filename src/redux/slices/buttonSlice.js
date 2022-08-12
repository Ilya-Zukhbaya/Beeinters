import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerButton: 0,
  headerButtonClick: false,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setHeaderButton(state, action) {
      state.headerButton = action.payload;
    },
    setHeaderButtonClick(state, action) {
      state.headerButtonClick = action.payload;
    },
  },
});

export const { setHeaderButton, setHeaderButtonClick } = buttonSlice.actions;

export default buttonSlice.reducer;
