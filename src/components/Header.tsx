import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white shadow-md">
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
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/tollywood" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }
                >
                  Tollywood
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/tech" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }
                >
                  Tech
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
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
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
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
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
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
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
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