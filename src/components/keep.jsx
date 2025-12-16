import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-nunito">
      {/* Top contact bar (desktop only) */}
      <div className="hidden md:flex justify-between items-center w-full bg-gray-900 text-white text-sm px-6 py-2">
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
          {/* Phone */}
          <div className="flex items-center gap-1">
            <span>📞</span>
            <span>+1 234 567 890</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>Bengaluru, India</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1">
            <span>✉</span>
            <span>info@cafirm.com</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-700">CA Firm</h1>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/services" className="hover:text-indigo-600">
            Services
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* CTA desktop */}
        <Link
          to="/contact"
          className="hidden md:block bg-indigo-700 text-white px-4 py-1.5 rounded-full hover:bg-indigo-600 transition font-nunito text-sm"
        >
          Get in Touch
        </Link>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <div className="flex flex-col items-center py-4 gap-4">
            <Link
              to="/services"
              className="text-gray-700 font-medium hover:text-indigo-600"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 font-medium hover:text-indigo-600"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-indigo-700 text-white px-4 py-1.5 rounded-full hover:bg-indigo-600 transition font-nunito text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
