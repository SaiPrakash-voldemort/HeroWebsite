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
  ].slice(0, 4);

  return (
    <>
      <SEO 
        title="Home" 
        description="Shop Tollywood styles and top gadgets with exclusive deals. Get the hero look with our curated collection of fashion and tech products."
      />
      <div className="container-custom py-8">
        {/* Trendy Carousel */}
        <TrendyCarousel />
        
        {/* Category Navigation - Myntra Style */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              { name: "Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", link: "/category/jackets" },
              { name: "Sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", link: "/category/sunglasses" },
              { name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", link: "/category/watches" },
              { name: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", link: "/category/footwear" },
              { name: "Gadgets", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", link: "/category/gadgets" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", link: "/category/accessories" },
            ].map((category, index) => (
              <a 
                key={index} 
                href={category.link}
                className="flex flex-col items-center group"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-primary-400 transition-all duration-300">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-600 transition-colors duration-300">
                  {category.name}
                </span>
              </a>
            ))}
          </div>
        </section>
        
        {/* Deal of the Day - Myntra Style */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-3 text-neutral-800">Deal of the Day</h2>
                <p className="text-lg mb-4 text-neutral-600">Limited time offer on premium products</p>
                <div className="flex space-x-4 mb-4">
                  <div className="bg-white rounded-lg p-2 shadow-sm w-14 text-center">
                    <div className="text-2xl font-bold text-primary-600">12</div>
                    <div className="text-xs text-neutral-500">Hours</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm w-14 text-center">
                    <div className="text-2xl font-bold text-primary-600">45</div>
                    <div className="text-xs text-neutral-500">Mins</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm w-14 text-center">
                    <div className="text-2xl font-bold text-primary-600">30</div>
                    <div className="text-xs text-neutral-500">Secs</div>
                  </div>
                </div>
                <a 
                  href="/deals" 
                  className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 btn-highlight"
                >
                  Shop Deals
                </a>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Deal of the day product" 
                  className="rounded-lg shadow-md max-w-xs"
                />
                <div className="absolute -top-3 -right-3 bg-secondary-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  40% OFF
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        {/* Collections - Myntra Style */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800">Shop by Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-sm group">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Tollywood Collection" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Tollywood Style</h3>
                <p className="text-white/80 mb-4">Get the look of your favorite Tollywood heroes</p>
                <a 
                  href="/tollywood" 
                  className="inline-block px-6 py-2 bg-white text-neutral-800 rounded-lg hover:bg-primary-50 transition-colors duration-300 font-medium"
                >
                  Explore Collection
                </a>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-sm group">
              <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Tech Collection" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Tech Gadgets</h3>
                <p className="text-white/80 mb-4">Discover the latest and greatest tech gadgets</p>
                <a 
                  href="/tech" 
                  className="inline-block px-6 py-2 bg-white text-neutral-800 rounded-lg hover:bg-primary-50 transition-colors duration-300 font-medium"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trending Now Section - Improved */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 group">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending jacket" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800 line-clamp-1">Designer Jackets</h3>
                <p className="text-sm text-neutral-500 line-clamp-1">As seen in recent blockbusters</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 group">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending sunglasses" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800 line-clamp-1">Premium Sunglasses</h3>
                <p className="text-sm text-neutral-500 line-clamp-1">Celebrity approved styles</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 group">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending watch" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800 line-clamp-1">Luxury Watches</h3>
                <p className="text-sm text-neutral-500 line-clamp-1">Hero-inspired timepieces</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 group">
                <div className="h-40 bg-neutral-100 rounded mb-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Trending sneakers" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-neutral-800 line-clamp-1">Stylish Sneakers</h3>
                <p className="text-sm text-neutral-500 line-clamp-1">Trending footwear collection</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Call-to-Action Section - Myntra Style */}
        <section className="mb-12">
          <motion.div 
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 shadow-sm text-center"
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

