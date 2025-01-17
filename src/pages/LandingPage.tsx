import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80&w=2070")',
    }}>
      <div className="min-h-screen bg-black bg-opacity-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Verdant</h1>
          <p className="text-xl max-w-2xl mb-8">
            Transform your space with our carefully curated collection of beautiful houseplants. 
            At Verdant, we believe in bringing the beauty and tranquility of nature into your home. 
            Each plant is hand-selected for quality and comes with care instructions to ensure it thrives in its new home.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;