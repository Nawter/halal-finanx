import React from 'react';
import { X, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-slate-400 mb-4 md:mb-0">
            &copy; 2024 HalalFinanx Directory. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="X (formerly Twitter)">
              <X size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-slate-500">
          <div className="space-x-4">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;