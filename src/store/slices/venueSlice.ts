import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Venue } from '../../types';

interface VenueState {
  selectedVenue: Venue | null;
  numberOfDays: number;
}

const initialState: VenueState = {
  selectedVenue: null,
  numberOfDays: 1,
};

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    selectVenue: (state, action: PayloadAction<Venue | null>) => {
      state.selectedVenue = action.payload;
    },
    setNumberOfDays: (state, action: PayloadAction<number>) => {
      state.numberOfDays = action.payload;
    },
  },
});

export const { selectVenue, setNumberOfDays } = venueSlice.actions;
export default venueSlice.reducer;