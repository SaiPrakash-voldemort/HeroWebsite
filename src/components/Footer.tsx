import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">HeroGadgets</h3>
            <p className="text-neutral-400 mb-4">
              Your one-stop destination for Tollywood-inspired fashion and cutting-edge tech products.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/HeroGadgets" className="text-neutral-400 hover:text-accent-lavender transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/HeroGadgets" className="text-neutral-400 hover:text-accent-sky transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com/HeroGadgets" className="text-neutral-400 hover:text-accent-sky transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@herogadgets.com" className="text-neutral-400 hover:text-accent-coral transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-300 hover:pl-1">
                  Home
                </a>
              </li>
              <li>
                <a href="/tollywood" className="hover:text-white transition-colors duration-300 hover:pl-1">
                  Tollywood
                </a>
              </li>
              <li>
                <a href="/tech" className="hover:text-white transition-colors duration-300 hover:pl-1">
                  Tech
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-300 hover:pl-1">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Contact Us</h3>
            <p className="text-neutral-400 mb-2">Have questions or suggestions?</p>
            <a 
              href="mailto:contact@herogadgets.com" 
              className="text-primary-300 hover:text-primary-200 transition-colors duration-300"
            >
              contact@herogadgets.com
            </a>
            <div className="mt-4 p-4 bg-neutral-700 rounded-lg">
              <p className="text-sm text-neutral-300">
                Join our newsletter for exclusive deals and updates!
              </p>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow p-2 rounded-l-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} HeroGadgets. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            {' • '}
            <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            {' • '}
            <a href="/affiliate-disclosure" className="hover:text-white transition-colors duration-300">Affiliate Disclosure</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
