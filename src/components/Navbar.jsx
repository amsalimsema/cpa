import { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white font-nunito shadow-sm">
      {/* Top contact bar (desktop only) */}
      <div className="hidden md:flex justify-between items-center w-full bg-indigo-700 text-white text-sm px-6 py-2">
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@cafirm.com</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-100">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-indigo-700 tracking-tight">
          CA Firm
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative hover:text-indigo-700 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-700 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <Link
          to="/contact"
          className="hidden md:block bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition text-sm font-semibold"
        >
          Get in Touch
        </Link>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col gap-6">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-900 hover:text-gray-700"
            >
              <X size={28} />
            </button>

            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-800 font-medium text-lg hover:text-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Full-width CTA */}
            <Link
              to="/contact"
              className="w-full text-center bg-indigo-700 text-white px-5 py-3 rounded-full hover:bg-indigo-600 transition text-base font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
