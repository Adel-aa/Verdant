import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, updateCart } from '../store/slices/cartSlice';
import { venues } from '../data/venues';
import { addons } from '../data/addons';
import { meals } from '../data/meals';
import type { RootState } from '../store';
import type { CartItem } from '../types';

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const venue = useSelector((state: RootState) => state.venue);
  const selectedAddOns = useSelector((state: RootState) => state.addons.selectedAddOns);
  const { selectedMeals, guestCount } = useSelector((state: RootState) => state.meals);

  useEffect(() => {
    const items: CartItem[] = [];

    // Add venue if selected
    if (venue.selectedVenue) {
      items.push({
        id: venue.selectedVenue.id,
        type: 'venue',
        name: venue.selectedVenue.name,
        quantity: venue.numberOfDays,
        unitPrice: venue.selectedVenue.pricePerDay,
        totalPrice: venue.selectedVenue.pricePerDay * venue.numberOfDays,
      });
    }

    // Add selected add-ons
    Object.entries(selectedAddOns).forEach(([id, quantity]) => {
      const addon = addons.find((a) => a.id === id);
      if (addon && quantity > 0) {
        items.push({
          id,
          type: 'addon',
          name: addon.name,
          quantity,
          unitPrice: addon.pricePerUnit,
          totalPrice: addon.pricePerUnit * quantity,
        });
      }
    });

    // Add selected meals
    Object.entries(selectedMeals).forEach(([id, quantity]) => {
      const meal = meals.find((m) => m.id === id);
      if (meal && quantity > 0) {
        items.push({
          id,
          type: 'meal',
          name: meal.name,
          quantity,
          unitPrice: meal.pricePerPerson * guestCount,
          totalPrice: meal.pricePerPerson * guestCount * quantity,
        });
      }
    });

    dispatch(updateCart(items));
  }, [venue, selectedAddOns, selectedMeals, guestCount, dispatch]);

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Event Summary</h2>
            <button
              onClick={() => dispatch(toggleCart())}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">No items selected</p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Item</th>
                    <th className="text-right py-2">Quantity</th>
                    <th className="text-right py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">
                          ${item.unitPrice.toLocaleString()} per{' '}
                          {item.type === 'venue'
                            ? 'day'
                            : item.type === 'meal'
                            ? 'meal'
                            : 'unit'}
                        </div>
                      </td>
                      <td className="text-right py-2">{item.quantity}</td>
                      <td className="text-right py-2">
                        ${item.totalPrice.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => {
                // Here you would typically handle the checkout process
                alert('Thank you for your order! Our team will contact you shortly.');
                dispatch(toggleCart());
              }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;