import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedButtons: [],
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    selectButtons: (state, action: PayloadAction<string>) => {
      state.selectedButtons.includes(action.payload)
        ? (state.selectedButtons = state.selectedButtons.filter(
            (button) => button !== action.payload,
          ))
        : state.selectedButtons.push(action.payload);
    },
    selectAll: (state, action: PayloadAction<string[]>) => {
      state.selectedButtons = action.payload;
    },
    searchButtons: (state, action: PayloadAction<string>) => {},
  },
});

export default buttonSlice.reducer;

export const { selectButtons, selectAll } = buttonSlice.actions;
