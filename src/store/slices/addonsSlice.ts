import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AddOn } from '../../types';

interface AddOnsState {
  selectedAddOns: { [key: string]: number }; // id -> quantity
}

const initialState: AddOnsState = {
  selectedAddOns: {},
};

const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    updateAddon: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      if (quantity === 0) {
        delete state.selectedAddOns[id];
      } else {
        state.selectedAddOns[id] = quantity;
      }
    },
    clearAddons: (state) => {
      state.selectedAddOns = {};
    },
  },
});

export const { updateAddon, clearAddons } = addonsSlice.actions;
export default addonsSlice.reducer;