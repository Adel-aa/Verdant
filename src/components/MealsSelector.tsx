import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMeal, setGuestCount } from '../store/slices/mealsSlice';
import { meals } from '../data/meals';
import type { RootState } from '../store';

const MealsSelector = () => {
  const dispatch = useDispatch();
  const { selectedMeals, guestCount } = useSelector((state: RootState) => state.meals);
  const selectedVenue = useSelector((state: RootState) => state.venue.selectedVenue);

  if (!selectedVenue) {
    return (
      <div className="text-gray-500 italic">
        Please select a venue first to view meal options
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <label htmlFor="guests" className="text-gray-700">
          Number of Guests:
        </label>
        <input
          type="number"
          id="guests"
          min="1"
          max={selectedVenue.capacity}
          value={guestCount}
          onChange={(e) =>
            dispatch(setGuestCount(Math.min(selectedVenue.capacity, Math.max(0, parseInt(e.target.value) || 0))))
          }
          className="w-24 px-3 py-2 border rounded-md"
        />
        <span className="text-sm text-gray-500">
          (Max: {selectedVenue.capacity})
        </span>
      </div>

      {guestCount > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="p-4 rounded-lg border bg-white shadow-sm"
            >
              <h3 className="text-lg font-medium">{meal.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{meal.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-medium">
                  ${meal.pricePerPerson}/person
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateMeal({
                          id: meal.id,
                          quantity: Math.max(0, (selectedMeals[meal.id] || 0) - 1),
                        })
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full border"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{selectedMeals[meal.id] || 0}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateMeal({
                          id: meal.id,
                          quantity: (selectedMeals[meal.id] || 0) + 1,
                        })
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full border"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealsSelector;