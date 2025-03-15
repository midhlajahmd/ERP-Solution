import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Adam-i ERP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/features"
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <div className="ml-4 flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-white bg-transparent border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-indigo-600 bg-white hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg">
          <Link
            to="/features"
            className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <div className="mt-4 space-y-2 px-3">
            <Link
              to="/login"
              className="text-white bg-transparent border border-white/30 hover:bg-white/10 w-full inline-block text-center px-4 py-2 rounded-lg text-base font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="text-indigo-600 bg-white hover:bg-blue-50 w-full inline-block text-center px-4 py-2 rounded-lg text-base font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 