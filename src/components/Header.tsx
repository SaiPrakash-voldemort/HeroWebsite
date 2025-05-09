import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-neutral-800 shadow-sm sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              HeroGadgets
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      isActive 
                        ? "text-primary-600 font-medium border-b-2 border-primary-500 pb-1" 
                        : "text-neutral-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 pb-1 transition-all duration-200"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/tollywood" 
                    className={({ isActive }) => 
                      isActive 
                        ? "text-primary-600 font-medium border-b-2 border-primary-500 pb-1" 
                        : "text-neutral-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 pb-1 transition-all duration-200"
                    }
                  >
                    Tollywood
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/tech" 
                    className={({ isActive }) => 
                      isActive 
                        ? "text-primary-600 font-medium border-b-2 border-primary-500 pb-1" 
                        : "text-neutral-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 pb-1 transition-all duration-200"
                    }
                  >
                    Tech
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      isActive 
                        ? "text-primary-600 font-medium border-b-2 border-primary-500 pb-1" 
                        : "text-neutral-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-500 pb-1 transition-all duration-200"
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right side icons - Myntra style */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-neutral-700 hover:text-primary-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-neutral-700 hover:text-primary-600 transition-colors">
              <User size={20} />
            </button>
            <button className="text-neutral-700 hover:text-primary-600 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-700 p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-white rounded-lg p-4 shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary-600 font-medium pl-2 border-l-2 border-primary-500" 
                      : "text-neutral-700 hover:text-primary-600 pl-2 hover:border-l-2 hover:border-primary-500 transition-all duration-200"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/tollywood" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary-600 font-medium pl-2 border-l-2 border-primary-500" 
                      : "text-neutral-700 hover:text-primary-600 pl-2 hover:border-l-2 hover:border-primary-500 transition-all duration-200"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tollywood
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/tech" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary-600 font-medium pl-2 border-l-2 border-primary-500" 
                      : "text-neutral-700 hover:text-primary-600 pl-2 hover:border-l-2 hover:border-primary-500 transition-all duration-200"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tech
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary-600 font-medium pl-2 border-l-2 border-primary-500" 
                      : "text-neutral-700 hover:text-primary-600 pl-2 hover:border-l-2 hover:border-primary-500 transition-all duration-200"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

