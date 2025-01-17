import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { MealOption } from '../../types';

interface MealsState {
  selectedMeals: { [key: string]: number }; // id -> quantity
  guestCount: number;
}

const initialState: MealsState = {
  selectedMeals: {},
  guestCount: 0,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    updateMeal: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      if (quantity === 0) {
        delete state.selectedMeals[id];
      } else {
        state.selectedMeals[id] = quantity;
      }
    },
    setGuestCount: (state, action: PayloadAction<number>) => {
      state.guestCount = action.payload;
    },
    clearMeals: (state) => {
      state.selectedMeals = {};
      state.guestCount = 0;
    },
  },
});

export const { updateMeal, setGuestCount, clearMeals } = mealsSlice.actions;
export default mealsSlice.reducer;