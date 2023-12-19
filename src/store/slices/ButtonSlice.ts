import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedButton: '',
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    selectButton: (state, action: PayloadAction<string>) => {
      state.selectedButton = action.payload;
    },
  },
});

export default buttonSlice.reducer;

export const { selectButton } = buttonSlice.actions;
