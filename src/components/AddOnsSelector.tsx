import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddon } from '../store/slices/addonsSlice';
import { addons } from '../data/addons';
import type { RootState } from '../store';

const AddOnsSelector = () => {
  const dispatch = useDispatch();
  const selectedAddOns = useSelector((state: RootState) => state.addons.selectedAddOns);
  const selectedVenue = useSelector((state: RootState) => state.venue.selectedVenue);

  if (!selectedVenue) {
    return (
      <div className="text-gray-500 italic">
        Please select a venue first to view available add-ons
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {addons.map((addon) => (
        <div
          key={addon.id}
          className="p-4 rounded-lg border bg-white shadow-sm"
        >
          <h3 className="text-lg font-medium">{addon.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{addon.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-medium">
              ${addon.pricePerUnit}/unit
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  dispatch(
                    updateAddon({
                      id: addon.id,
                      quantity: Math.max(0, (selectedAddOns[addon.id] || 0) - 1),
                    })
                  )
                }
                className="w-8 h-8 flex items-center justify-center rounded-full border"
              >
                -
              </button>
              <span className="w-8 text-center">{selectedAddOns[addon.id] || 0}</span>
              <button
                onClick={() =>
                  dispatch(
                    updateAddon({
                      id: addon.id,
                      quantity: (selectedAddOns[addon.id] || 0) + 1,
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
  );
};

export default AddOnsSelector;