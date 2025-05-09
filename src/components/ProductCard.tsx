import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  featured: boolean;
  affiliateLink: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-glow transition-all duration-400"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <LazyImage 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-110"
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-800 mb-1">{product.title}</h3>
        <p className="text-neutral-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-bold">₹{product.price}</span>
          <div className="flex items-center">
            <span className="text-accent-amber mr-1">★</span>
            <span className="text-neutral-700 text-sm">{product.rating}</span>
          </div>
        </div>
        <a 
          href={product.affiliateLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-3 block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-2 rounded-lg transition-colors duration-300"
        >
          View Deal
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;


