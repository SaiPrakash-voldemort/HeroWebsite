import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBanner from '../components/AnimatedBanner';
import ProductCard from '../components/ProductCard';
import techProducts from '../data/tech';

const Tech = () => {
  const [sortBy, setSortBy] = useState<string>('featured');

  // Sort products based on selected option
  const sortedProducts = [...techProducts].sort((a, b) => {
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
        title="Tech Gadgets" 
        subtitle="Discover the latest tech at the best prices"
        bgClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tech Collection</h2>
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
        <h3 className="text-xl font-bold mb-4">About Our Tech Selection</h3>
        <p className="text-gray-700 mb-4">
          We curate the best tech gadgets from trusted brands at competitive prices. Our selection includes 
          smartphones, earphones, laptops, and more to enhance your digital lifestyle.
        </p>
        <p className="text-gray-700">
          All products are carefully selected for their quality, performance, and value for money. We partner 
          with top retailers like Amazon and Flipkart to bring you the best deals.
        </p>
      </div>
    </div>
  );
};

export default Tech;
