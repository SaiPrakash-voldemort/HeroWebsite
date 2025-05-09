import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="container-custom py-8">
      <motion.div
        className="bg-white rounded-lg shadow-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">About HeroGadgets</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            HeroGadgets was created with a simple mission: to bring together the best of Tollywood fashion and cutting-edge 
            technology in one curated platform. We help fans find authentic hero-inspired styles and the latest tech gadgets 
            at competitive prices.
          </p>
          <p className="text-gray-700">
            Our team of enthusiasts carefully selects each product, ensuring quality, authenticity, and value for money. 
            We partner with trusted retailers like Amazon and Flipkart to bring you the best deals.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">How It Works</h2>
          <p className="text-gray-700 mb-4">
            We curate products from various online retailers and provide you with direct links to purchase them. 
            As an affiliate partner, we earn a small commission when you make a purchase through our links, 
            at no additional cost to you.
          </p>
          <p className="text-gray-700">
            This helps us maintain and improve HeroGadgets while continuing to bring you the best product recommendations.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <p className="text-gray-700 mb-4">
            We love hearing from our community! Follow us on social media for the latest updates, 
            product recommendations, and exclusive deals.
          </p>
          
          <div className="flex space-x-6 mt-4">
            <a href="https://instagram.com/HeroGadgets" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
              <Instagram size={24} className="mr-2" />
              <span>@HeroGadgets</span>
            </a>
            <a href="https://twitter.com/HeroGadgets" className="flex items-center text-gray-700 hover:text-blue-400 transition-colors">
              <Twitter size={24} className="mr-2" />
              <span>@HeroGadgets</span>
            </a>
            <a href="https://facebook.com/HeroGadgets" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Facebook size={24} className="mr-2" />
              <span>HeroGadgets</span>
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions, suggestions, or business inquiries? We'd love to hear from you!
          </p>
          <a href="mailto:contact@herogadgets.com" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <Mail size={24} className="mr-2" />
            <span>contact@herogadgets.com</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;