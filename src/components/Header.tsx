import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

function Header() {
  return (
    <header className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="text-blue-400" size={24} />
            <span className="font-bold text-xl text-slate-100">HalalFinanx</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-slate-200 hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="text-slate-200 hover:text-blue-400 transition-colors">About Halal Finance</Link>
            <Link to="/blog" className="text-slate-200 hover:text-blue-400 transition-colors">Halal Finance Blog</Link>
            <Link to="/contact" className="text-slate-200 hover:text-blue-400 transition-colors">Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;