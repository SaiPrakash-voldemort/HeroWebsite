import { motion } from 'framer-motion';
import AnimatedBanner from '../components/AnimatedBanner';
import ProductCard from '../components/ProductCard';
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
        <AnimatedBanner 
          title="Get the Hero Look & Tech!" 
          subtitle="Shop Tollywood styles and top gadgets with exclusive deals"
        />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 rounded-lg p-6 shadow-inner"
          >
            <h2 className="text-2xl font-bold mb-4">Why HeroGadgets?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">Curated Selection</h3>
                <p className="text-gray-600">Handpicked products inspired by your favorite Tollywood stars and cutting-edge tech.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">Best Deals</h3>
                <p className="text-gray-600">We find the best prices from trusted retailers like Amazon and Flipkart.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">Trend Updates</h3>
                <p className="text-gray-600">Stay updated with the latest fashion trends and tech innovations.</p>
              </div>
            </div>
          </motion.div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-800">Tollywood Style</h2>
            <p className="mb-4 text-primary-700">Get the look of your favorite Tollywood heroes with our curated fashion collection.</p>
            <a href="/tollywood" className="btn-primary inline-block">Explore Tollywood</a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-secondary-100 to-secondary-200 p-6 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-4 text-secondary-800">Tech Gadgets</h2>
            <p className="mb-4 text-secondary-700">Discover the latest and greatest tech gadgets at competitive prices.</p>
            <a href="/tech" className="btn-secondary inline-block">Explore Tech</a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
