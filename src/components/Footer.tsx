import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl mb-4">HeroGadgets</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for Tollywood-inspired fashion and cutting-edge tech products.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/HeroGadgets" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/HeroGadgets" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com/HeroGadgets" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@herogadgets.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/tollywood" className="hover:text-white transition-colors">Tollywood</a></li>
              <li><a href="/tech" className="hover:text-white transition-colors">Tech</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Have questions or suggestions?</p>
            <a href="mailto:contact@herogadgets.com" className="text-primary-400 hover:text-primary-300 transition-colors">
              contact@herogadgets.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HeroGadgets. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            {' • '}
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            {' • '}
            <a href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;