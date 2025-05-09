import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBanner from '../components/AnimatedBanner';
import ProductCard from '../components/ProductCard';
import tollywoodProducts from '../data/tollywood';

const Tollywood = () => {
  const [sortBy, setSortBy] = useState<string>('featured');

  // Sort products based on selected option
  const sortedProducts = [...tollywoodProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    } else if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  return (
    <div className="container-custom py-8">
      <AnimatedBanner 
        title="Tollywood Fashion" 
        subtitle="Get the iconic looks from your favorite Tollywood stars"
        bgClass="bg-gradient-to-r from-yellow-600 to-red-600"
      />
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tollywood Collection</h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-2 bg-white"
          >
            <option value="featured">Featured</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
      
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">About Tollywood Fashion</h3>
        <p className="text-gray-700 mb-4">
          Tollywood, the Telugu film industry, is known for its vibrant fashion and trendsetting styles. 
          Our collection brings you authentic fashion inspired by the biggest stars of Tollywood.
        </p>
        <p className="text-gray-700">
          Whether you're a fan of Allu Arjun's rugged look from Pushpa or Mahesh Babu's sophisticated style, 
          we've curated the best pieces to help you channel your inner hero.
        </p>
      </div>
    </div>
  );
};

export default Tollywood;