import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBoxes, FaChartBar, FaUsersCog, FaClipboardList, FaCog } from 'react-icons/fa';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center text-white mb-24">
          <h1 className="text-6xl font-bold mb-8 animate-fade-in">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">ERP Solution</span>
          </h1>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed">
            A comprehensive enterprise resource planning solution designed for modern businesses
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Login Card */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
          
              <Link
                to="/login"
                className="inline-block w-full bg-white/20 text-white py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 backdrop-blur-lg"
              >
                Sign In
              </Link>
            </div>

            {/* Register Card */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              
              
              <Link
                to="/register"
                className="inline-block w-full bg-white text-indigo-600 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>

        

        {/* Footer */}
        <div className="text-center mt-24 text-blue-100">
          <p>© 2024 ERP Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing; 