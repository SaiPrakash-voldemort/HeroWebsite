import { motion } from 'framer-motion';
import AnimatedBanner from '../components/AnimatedBanner';
import ProductCard from '../components/ProductCard';
import TrendyCarousel from '../components/TrendyCarousel';
import SEO from '../components/SEO';
import tollywoodProducts from '../data/tollywood';
import techProducts from '../data/tech';

const Home = () => {
  // Get featured products from both categories
  const featuredProducts = [
    ...tollywoodProducts.filter(product => product.featured),
    ...techProducts.filter(product => product.featured)
  ];

  return (
    <>
      <SEO 
        title="Home" 
        description="Shop Tollywood styles and top gadgets with exclusive deals. Get the hero look with our curated collection of fashion and tech products."
      />
      <div className="container-custom py-8">
        {/* Trendy Carousel */}
        <TrendyCarousel />
        
        <AnimatedBanner 
          title="Get the Hero Look & Tech!" 
          subtitle="Shop Tollywood styles and top gadgets with exclusive deals"
          bgClass="bg-gradient-to-r from-primary-500 to-secondary-500"
        />
        
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-soft"
          >
            <h2 className="text-2xl font-bold mb-4 text-neutral-800">Why HeroGadgets?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-primary-50 p-4 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-primary-600">Curated Selection</h3>
                <p className="text-neutral-600">Handpicked products inspired by your favorite Tollywood stars and cutting-edge tech.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-accent-mint/20 p-4 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-primary-600">Best Deals</h3>
                <p className="text-neutral-600">We find the best prices from trusted retailers like Amazon and Flipkart.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-accent-sky/20 p-4 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-primary-600">Trusted Reviews</h3>
                <p className="text-neutral-600">Every product is reviewed and tested for quality and authenticity.</p>
              </div>
            </div>
          </motion.div>
        </section>
        
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">Featured Products</h2>
            <a 
              href="/all-products" 
              className="text-primary-600 hover:text-primary-700 font-medium hover:underline transition-colors duration-300"
            >
              View All →
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-soft overflow-hidden relative"
          >
            {/* Decorative element */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary-300 opacity-30 rounded-full"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary-300 opacity-20 rounded-full"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-primary-800">Tollywood Style</h2>
              <p className="mb-4 text-primary-700">Get the look of your favorite Tollywood heroes with our curated fashion collection.</p>
              <a 
                href="/tollywood" 
                className="inline-block px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 btn-highlight"
              >
                Explore Tollywood
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-secondary-100 to-secondary-200 p-6 rounded-xl shadow-soft overflow-hidden relative"
          >
            {/* Decorative element */}
            <div className="absolute -left-16 -top-16 w-32 h-32 bg-secondary-300 opacity-30 rounded-full"></div>
            <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-secondary-300 opacity-20 rounded-full"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-secondary-800">Tech Gadgets</h2>
              <p className="mb-4 text-secondary-700">Discover the latest and greatest tech gadgets at competitive prices.</p>
              <a 
                href="/tech" 
                className="inline-block px-6 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors duration-300 btn-highlight"
              >
                Explore Tech
              </a>
            </div>
          </motion.div>
        </section>
        
        {/* New Trending Section with improved aesthetics */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-accent-lavender/30 to-accent-sky/30 rounded-xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-soft p-4 hover:shadow-glow transition-all duration-300">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending jacket" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800">Designer Jackets</h3>
                <p className="text-sm text-neutral-500">As seen in recent blockbusters</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-soft p-4 hover:shadow-glow transition-all duration-300">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending sunglasses" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800">Premium Sunglasses</h3>
                <p className="text-sm text-neutral-500">Celebrity approved styles</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-soft p-4 hover:shadow-glow transition-all duration-300">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending watch" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800">Luxury Watches</h3>
                <p className="text-sm text-neutral-500">Hero-inspired timepieces</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-soft p-4 hover:shadow-glow transition-all duration-300">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending sneakers" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800">Stylish Sneakers</h3>
                <p className="text-sm text-neutral-500">Trending footwear collection</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Call-to-Action Section */}
        <section className="mb-12">
          <motion.div 
            className="bg-gradient-to-r from-accent-coral/30 to-accent-amber/30 rounded-xl p-8 shadow-soft text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-neutral-800">Join Our Community</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-neutral-700">
              Get exclusive deals, early access to new products, and style tips from our fashion experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-400 flex-grow"
              />
              <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 btn-highlight">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;



