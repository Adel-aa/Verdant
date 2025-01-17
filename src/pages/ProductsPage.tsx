import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plants } from '../data/plants';
import { addToCart } from '../store/slices/cartSlice';
import type { RootState } from '../store';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const categories = ['indoor', 'outdoor', 'succulents'] as const;
  const categoryNames = {
    indoor: 'Indoor Plants',
    outdoor: 'Outdoor Plants',
    succulents: 'Succulents',
  };

  const isInCart = (plantId: string) => cartItems.some(item => item.id === plantId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Plants</h1>
      
      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {categoryNames[category]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div
                  key={plant.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={plant.imageUrl}
                    alt={plant.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {plant.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {plant.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-green-600 font-medium">
                        ${plant.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={isInCart(plant.id)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          isInCart(plant.id)
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {isInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductsPage;