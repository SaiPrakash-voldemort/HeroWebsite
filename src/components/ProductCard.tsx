import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import LazyImage from './LazyImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <LazyImage 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{product.title}</h3>
        
        <div className="flex items-center mb-2">
          {product.rating && (
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
            </div>
          )}
          <span className="ml-auto font-bold text-gray-900">{product.price}</span>
        </div>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        )}
        
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          <ShoppingCart size={18} className="mr-2" />
          Buy Now
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
