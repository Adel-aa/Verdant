import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVenue, setNumberOfDays } from '../store/slices/venueSlice';
import { venues } from '../data/venues';
import type { RootState } from '../store';

const VenueSelector = () => {
  const dispatch = useDispatch();
  const { selectedVenue, numberOfDays } = useSelector((state: RootState) => state.venue);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className={`relative rounded-lg overflow-hidden shadow-md transition-all ${
              selectedVenue?.id === venue.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => dispatch(selectVenue(venue))}
          >
            <img
              src={venue.imageUrl}
              alt={venue.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{venue.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{venue.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-blue-600 font-medium">
                  ${venue.pricePerDay.toLocaleString()} / day
                </span>
                <span className="text-gray-500 text-sm">
                  Up to {venue.capacity} guests
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVenue && (
        <div className="flex items-center space-x-4">
          <label htmlFor="days" className="text-gray-700">
            Number of Days:
          </label>
          <input
            type="number"
            id="days"
            min="1"
            value={numberOfDays}
            onChange={(e) => dispatch(setNumberOfDays(Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-20 px-3 py-2 border rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default VenueSelector;