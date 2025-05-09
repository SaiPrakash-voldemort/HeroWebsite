import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  category: string;
  featured?: boolean;
  link?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Product Image Container - Fixed Height */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            size={18} 
            className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-neutral-400"} 
          />
        </button>
      </div>
      
      {/* Product Info - Fixed Height */}
      <div className="p-4 h-36 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-neutral-800 mb-1 line-clamp-2 h-12">{product.name}</h3>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center mb-2">
              <div className="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                {product.rating} ★
              </div>
              <span className="text-xs text-neutral-500 ml-1">({Math.floor(Math.random() * 500) + 50})</span>
            </div>
          )}
        </div>
        
        <div>
          {/* Price */}
          <div className="flex items-center">
            <span className="font-semibold text-neutral-900">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-neutral-500 text-sm line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
              </>
            )}
          </div>
          
          {/* Link to product */}
          <Link 
            to={product.link || `/product/${product.id}`}
            className="mt-3 inline-block w-full text-center py-2 bg-primary-50 text-primary-600 font-medium rounded hover:bg-primary-100 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




