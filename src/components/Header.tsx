import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
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
                      ? "text-white font-bold border-b-2 border-accent-amber pb-1" 
                      : "text-white/90 hover:text-white hover:border-b-2 hover:border-accent-amber pb-1 transition-all duration-200"
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
                      ? "text-white font-bold border-b-2 border-accent-amber pb-1" 
                      : "text-white/90 hover:text-white hover:border-b-2 hover:border-accent-amber pb-1 transition-all duration-200"
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
                      ? "text-white font-bold border-b-2 border-accent-amber pb-1" 
                      : "text-white/90 hover:text-white hover:border-b-2 hover:border-accent-amber pb-1 transition-all duration-200"
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
                      ? "text-white font-bold border-b-2 border-accent-amber pb-1" 
                      : "text-white/90 hover:text-white hover:border-b-2 hover:border-accent-amber pb-1 transition-all duration-200"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-full hover:bg-primary-700 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-primary-700 rounded-lg p-4 shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-white font-bold pl-2 border-l-2 border-accent-amber" 
                      : "text-white/90 hover:text-white pl-2 hover:border-l-2 hover:border-accent-amber transition-all duration-200"
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
                      ? "text-white font-bold pl-2 border-l-2 border-accent-amber" 
                      : "text-white/90 hover:text-white pl-2 hover:border-l-2 hover:border-accent-amber transition-all duration-200"
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
                      ? "text-white font-bold pl-2 border-l-2 border-accent-amber" 
                      : "text-white/90 hover:text-white pl-2 hover:border-l-2 hover:border-accent-amber transition-all duration-200"
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
                      ? "text-white font-bold pl-2 border-l-2 border-accent-amber" 
                      : "text-white/90 hover:text-white pl-2 hover:border-l-2 hover:border-accent-amber transition-all duration-200"
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
